const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  "Content-Type": "application/json",
  "Accept": "application/json",
};

export const login = async (body) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const data = await response.json();

  return { ...data, code: response.status };
};

export const register = async (body) => {
  const response = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const data = await response.json();

  return { ...data, code: response.status };
}