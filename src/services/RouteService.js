import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer ' + Cookies.get('token'),
};

export const searchPublicRoute = async (term) => {
  const response = await fetch(
    `${API_URL}/routes?limit=10&offset=0&term=${term}`,
    {
      method: 'GET',
      headers: HEADERS,
      credentials: 'include',
    }
  );

  const data = await response.json();

  return data.result.routes;
};

export const searchPrivateRoute = async (term) => {
  const userResponse = await fetch(`${API_URL}/user`, {
    method: 'GET',
    headers: HEADERS,
    credentials: 'include',
  });
  const user = await userResponse.json();
  const response = await fetch(
    `${API_URL}/users/${user.user.id}/routes?limit=10&offset=0&term=${term}`,
    {
      method: 'GET',
      headers: HEADERS,
      credentials: 'include',
    }
  );

  const data = await response.json();

  return data.routes;
};
