'use client';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { authenticatedUser } from './UserService';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await authenticatedUser();

      if (user) {
        setUser(user);
      }
    };

    if (Cookies.get('token')) {
      fetchUser();
    }
  }, []);

  return user;
}
