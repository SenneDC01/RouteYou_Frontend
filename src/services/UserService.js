import Cookies from 'js-cookie';
import { getCookies } from 'next-client-cookies/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer ' + Cookies.get('token'),
};

export const login = async (body) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  Cookies.set('token', data.token);
  
  return { ...data, code: response.status };
};

export const register = async (body) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  Cookies.set('token', data.token);

  return { ...data, code: response.status };
};

export const logout = async () => {
  const serverCookies = getCookies();
  HEADERS.Authorization = 'Bearer ' + serverCookies.get('token');

  const response = await fetch(`${API_URL}/logout`, {
    method: 'POST',
    headers: HEADERS,
  });
  const data = await response.json();
  Cookies.remove('token');

  return { ...data, code: response.status };
};

export const authenticatedUser = async (token) => {
  if (token) {
    HEADERS.Authorization = 'Bearer ' + token;
  }

  const response = await fetch(`${API_URL}/user`, {
    method: 'GET',
    headers: HEADERS,
  });
  const data = await response.json();

  return { ...data, code: response.status };
};
