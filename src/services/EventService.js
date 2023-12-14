const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  "Content-Type": "application/json",
  "Authorization": "Bearer 2|CBKNMjODZHT8Q2QUj1cShlYOwGURWRSbt1Y1skIC71d425c9"
};

export const createdEvents = async () => {
  console.log({API_URL})
  const response = await fetch(`${API_URL}/events/created`, {
    method: "GET",
    headers: HEADERS,
  });
  const data = await response.json();
  console.log(data)

  return data.events.data;
};
