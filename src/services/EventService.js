import dayjs from 'dayjs';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
};

export const eventDetail = async (eventId) => {
  const response = await fetch(`${API_URL}/events/${eventId}`);
  const data = await response.json();

  return { ...data, code: response.status };
};

export const createdEvents = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${API_URL}/events/created`, {
      method: 'GET',
      headers: HEADERS,
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data.events.data;
  } catch (error) {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};

export const interestedEvents = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${API_URL}/events/interested`, {
      method: 'GET',
      headers: HEADERS,
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    return data.events.data;
  } catch (error) {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};

export const signUpEvent = async (eventId, groupMembers) => {
  const response = await fetch(`${API_URL}/events/${eventId}/participate`, {
    method: 'POST',
    headers: HEADERS,
    body: groupMembers
      ? JSON.stringify({
          group_members: groupMembers,
        })
      : null,
  });
  const data = await response.json();

  return { ...data, code: response.status };
};

export const createEvent = async (body) => {
  const formData = new FormData(body);
  const arr = [6833170, 7821899];
  arr.forEach((e, i) => {
    formData.append(`routes_id[${i}]`, e);
  });

  formData.delete('routes_id');

  const startDate = dayjs(formData.get('start_date')).format(
    'YYYY-MM-DD HH:mm:ss'
  );
  const endDate = dayjs(formData.get('end_date')).format('YYYY-MM-DD HH:mm:ss');

  formData.set('start_date', startDate);
  formData.set('end_date', endDate);

  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_TEST_TOKEN,
      Accept: 'application/json',
    },
    body: formData,
  });
  const data = await response.json();

  return { ...data, code: response.status };
};
