const API_URL = process.env.API_URL;
const HEADERS = {
  "Content-Type": "application/json",
};

export const login = async (body) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(body),
  });
  const data = await response.json();

  return data;
};
