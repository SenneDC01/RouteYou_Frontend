const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  "Content-Type": "application/json",
  Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
};

export const createdEvents = async () => {
  const response = await fetch(`${API_URL}/events/created`, {
    method: "GET",
    headers: HEADERS,
  });
  const data = await response.json();

  return data.events.data;
};
