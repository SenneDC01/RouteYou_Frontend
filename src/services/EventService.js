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

export const getParticipants = async (eventId) => {
  const response = await fetch(`${API_URL}/events/${eventId}/participants`, {
    headers: HEADERS,
  });
  const data = await response.json();

  return { ...data, code: response.status };
};

export const getPictures = async (eventId) => {
  const response = await fetch(`${API_URL}/events/${eventId}/images`, {
    headers: HEADERS,
  });
  const data = await response.json();

  return { ...data, code: response.status };
};

export const postPictures = async (eventId, formData) => {
  try {
    const response = await fetch(`${API_URL}/events/${eventId}/images`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + Cookies.get('token'),
      },
      body: formData,
    });
    console.log(formData);
    const data = await response.json();

    if (response.status !== 201) {
      console.error('Non-201 status code received:', response.status, data);
    }

    return { ...data, code: response.status };
  } catch (error) {
    console.error('Error posting image:', error);
    throw error;
  }
};

export const getPosts = async (eventId) => {
  const response = await fetch(`${API_URL}/events/${eventId}/posts`, {
    headers: HEADERS,
  });
  const data = await response.json();
  console.log(data);
  return { ...data, code: response.status };
};

export const createEvent = async (body) => {
  const formData = new FormData(body);
  const arr = formData.getAll('routes_id');

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

export const signedUpEvents = async () => {
  const serverCookies = getCookies();
  HEADERS.Authorization = 'Bearer ' + serverCookies.get('token');

  const response = await fetch(`${API_URL}/events/signedup`, {
    method: 'GET',
    headers: HEADERS,
  });
  const data = await response.json();

  return { ...data, code: response.status };
};

export const editEvent = async () => {
  return {};
};
