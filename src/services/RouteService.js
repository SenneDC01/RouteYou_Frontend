const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
  Accept: 'application/json',
  Credentials: 'include',
};

export const searchPublicRoute = async (term) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  // console.log(document.cookie);
  // return;
  try {
    const response = await fetch(`${API_URL}/routes?limit=10&offset=0`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
        Accept: 'application/json',
        Credentials: 'same-origin/include',
      },
    });

    const res = await response;
    console.log(res.headers);
    const data = res.json();

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
      `http://localhost:8080/api/users/1175366/routes?limit=10&offset=0`,
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
