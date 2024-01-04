import Cookies from 'js-cookie';
import { getCookies } from 'next-client-cookies/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer ' + Cookies.get('token'),
};

export const eventDetail = async (eventId) => {
  const response = await fetch(`${API_URL}/events/${eventId}`);
  const data = await response.json();

  return { ...data, code: response.status };
};

export const createdEvents = async () => {
  const serverCookies = getCookies();
  HEADERS.Authorization = 'Bearer ' + serverCookies.get('token');

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
  const serverCookies = getCookies();
  HEADERS.Authorization = 'Bearer ' + serverCookies.get('token');

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
