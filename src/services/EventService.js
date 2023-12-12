const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  "Content-Type": "application/json",
  "Authorization": "Bearer 1|Jq2THPid3LywhBBskAI38mvEMnpvzG4021Dq3C0Bc9bad6fe"
};

export const createdEvents = async () => {
  const response = await fetch(`${API_URL}/events/created`, {
    method: "GET",
    headers: HEADERS,
  });
  const data = await response.json();
  console.log(data)

  return data.events.data;
};
