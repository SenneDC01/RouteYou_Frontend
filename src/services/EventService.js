import Cookies from 'js-cookie';
import { getCookies } from 'next-client-cookies/server';

import dayjs from 'dayjs';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer ' + Cookies.get('token'),
};

export const publicEvents = async () => {
  const response = await fetch(`${API_URL}/events`, {
    headers: HEADERS,
  });
  const data = await response.json();

  return { ...data, code: response.status };
};

export const eventDetail = async (eventId) => {
  const serverCookies = getCookies();
  HEADERS.Authorization = 'Bearer ' + serverCookies.get('token');

  const response = await fetch(`${API_URL}/events/${eventId}`, {
    headers: HEADERS,
  });
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

export const searchPublicEvents = async (term) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${API_URL}/events/search/${term}`, {
      method: 'GET',
      headers: HEADERS,
      signal: controller.signal,
    });

    const data = await response.json();

    return data.events.data;
  } catch (error) {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};

export const searchPrivateEvents = async (term) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${API_URL}/events/search/${term}`, {
      method: 'GET',
      headers: HEADERS,
      signal: controller.signal,
    });

    const data = await response.json();

    return data.events.data;
  } catch (error) {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
};

export const getParticipants = async () => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(`${API_URL}/events/1/participants`, {
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

export const createEvent = async (body) => {
  const formData = new FormData(body);
  const arr = formData.getAll('routes_id');

  // const arr = [6833170, 7821899];
  arr.forEach((e, i) => {
    formData.append(`routes_id[${i}]`, e);
  });

  formData.delete('routes_id');
  console.log(formData.get('routes_id[0]'));

  // formData.append(`routes_id`, arr);

  const startDate = dayjs(formData.get('start_date')).format(
    'YYYY-MM-DD HH:mm:ss'
  );
  const endDate = dayjs(formData.get('end_date')).format('YYYY-MM-DD HH:mm:ss');

  formData.set('start_date', startDate);
  formData.set('end_date', endDate);

  HEADERS['Content-Type'] = undefined;
  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer ' + Cookies.get('token'),
    },
    body: formData,
  });
  const data = await response.json();

  return { ...data, code: response.status };
};
