import { logout } from '@/services/UserService';
import React from 'react';
import { redirect } from 'next/navigation';
import MediumTitle from '@/components/atoms/medium-title/MediumTitle';

export default async function LogoutPage() {
  try {
    const response = await logout();
    if (response.code === 200) {
      redirect('/');
    }
  } catch (error) {
    redirect('/');
  } finally {
    redirect('/');
  }
  return (
    <div>
      <MediumTitle>Logging out ...</MediumTitle>
    </div>
  );
}
