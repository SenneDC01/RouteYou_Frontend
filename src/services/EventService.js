const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  "Content-Type": "application/json",
  Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
};

export const createdEvents = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${API_URL}/events/created`, {
      method: "GET",
      headers: HEADERS,
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    console.log(data);

    return data.events.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};
