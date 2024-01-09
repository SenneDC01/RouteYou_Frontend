const API_URL = process.env.NEXT_PUBLIC_API_URL;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
  Accept: 'application/json',
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
  const response = await fetch(
    `${API_URL}/users/${USER_ID}/routes?limit=10&offset=0&term=${term}`,
    {
      method: 'GET',
      headers: HEADERS,
      credentials: 'include',
    }
  );

  const data = await response.json();

  return data.routes;
};
