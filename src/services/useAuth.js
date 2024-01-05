import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get('token');
      const response = await fetch('http://localhost:8080/api/users/1175366', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token ? 'Bearer ' + token : '',
        },
      });
      const data = await response.json();

      if (data.user) {
        setUser(data.user);
      }
    };

    if (Cookies.get('token')) {
      fetchUser();
    }
  }, []);

  return user;
}
