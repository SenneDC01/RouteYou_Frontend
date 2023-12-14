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
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  console.log(data);

  return data.events.data;
};
