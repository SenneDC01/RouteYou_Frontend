'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { authenticatedUser } from './UserService';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get('token');
      const { user } = await authenticatedUser(token);

      if (user) {
        setUser(user);
      }
    };

    if (Cookies.get('token')) {
      fetchUser();
    } else {
      setUser(null);
    }
  }, []);

  return {
    user,
  };
}
