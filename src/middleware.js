import { NextResponse } from 'next/server';
import { authenticatedUser } from './services/UserService';

export async function middleware(request) {
  const nextUrl = request.nextUrl.clone();

  const protectedPaths = [
    '/dashboard',
    '/dashboard/interested',
    '/dashboard/my-events',
    '/events/create',
  ];
  const protectedRouteRegex = new RegExp('^/events/\\d+/signup$');

  const protectedPathsSignedIn = ['/login', '/register'];

  if (
    (protectedPaths.includes(nextUrl.pathname) &&
      !nextUrl.pathname.startsWith('/_next')) ||
    protectedRouteRegex.test(nextUrl.pathname)
  ) {
    const isValid = await isValidUser(request);
    if (!isValid) {
      nextUrl.pathname = '/login';
      return NextResponse.redirect(nextUrl);
    }
  }

  if (
    protectedPathsSignedIn.includes(nextUrl.pathname) &&
    !nextUrl.pathname.startsWith('/_next')
  ) {
    const isValid = await isValidUser(request);
    if (isValid) {
      nextUrl.pathname = '/dashboard/my-events';
      return NextResponse.redirect(nextUrl);
    }
  }

  return NextResponse.next();
}

const isValidUser = async (request) => {
  if (!request.cookies.has('token')) return;

  const token = request.cookies.get('token').value;
  const { user } = await authenticatedUser(token);

  if (user) {
    return true;
  }
  return false;
};
