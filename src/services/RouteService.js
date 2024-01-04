const API_URL = process.env.NEXT_PUBLIC_API_URL;
const USER_ID = process.env.NEXT_USER_ID;
const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
};

export const searchPublicRoute = async (term) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(
      `${API_URL}/routes?${term}&limit=10&offset=0`,
      {
        method: 'GET',
        headers: HEADERS,
        signal: controller.signal,
      }
    );

    const data = await response.json();

    return data.routes.data;
  } catch (error) {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};

export const searchPrivateRoute = async (term) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(
      `${API_URL}/users/${USER_ID}/routes?${term}&limit=10&offset=0`,
      {
        method: 'GET',
        headers: HEADERS,
        signal: controller.signal,
      }
    );

    const data = await response.json();

    return data.routes.data;
  } catch (error) {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};
