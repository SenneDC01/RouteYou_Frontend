import { NextResponse } from 'next/server';

export async function middleware(request) {
  const nextUrl = request.nextUrl.clone();

  const protectedPaths = [
    '/dashboard',
    '/dashboard/interested',
    '/dashboard/my-events',
  ];
  const protectedRouteRegex = new RegExp('^/events/\\d+/signup$');

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

  return NextResponse.next();
}

const isValidUser = async (request) => {
  if (!request.cookies.has('token')) return;

  const token = request.cookies.get('token').value;

  const response = await fetch(`http://localhost:8080/api/users/1175366`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token ? 'Bearer ' + token : '',
    },
  });
  const data = await response.json();

  if (data.user) {
    return true;
  }
  return false;
};
