const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  "Content-Type": "application/json",
  Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
};

export const createdEvents = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // Set a 10-second timeout

  try {
    const response = await fetch(`${API_URL}/events/created`, {
      method: "GET",
      headers: HEADERS,
      signal: controller.signal, // Attach the abort signal to the request
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    console.log(data);

    return data.events.data;
  } catch (error) {
    // Handle the error, for example, if the request was aborted due to a timeout
    console.error("Error fetching data:", error);
    return null;
  } finally {
    clearTimeout(timeoutId); // Clear the timeout to prevent it from triggering
  }
};
