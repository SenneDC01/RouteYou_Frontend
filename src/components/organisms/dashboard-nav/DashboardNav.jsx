'use client';
import React from 'react';
import styles from './DashboardNav.module.scss';
import DashboardLink from '@/components/atoms/dashboard-link/DashboardLink';

export default function DashboardNav() {
  return (
    <nav className={styles.nav}>
      <h1>Your Dashboard</h1>
      <ul>
        <DashboardLink
          link="/dashboard/account"
          icon={require('@/utils/icons/gear.svg')}
        >
          Account
        </DashboardLink>
        <DashboardLink
          link="/dashboard/my-events"
          icon={require('@/utils/icons/myEvents.svg')}
        >
          My Events
        </DashboardLink>
        <DashboardLink
          link="/dashboard/signups"
          icon={require('@/utils/icons/signUp.svg')}
        >
          Sign Ups
        </DashboardLink>
        <DashboardLink
          link="/dashboard/interested"
          icon={require('@/utils/icons/StarFill.svg')}
        >
          Interested Events
        </DashboardLink>
        <DashboardLink
          link="/dashboard/completed"
          icon={require('@/utils/icons/badge.svg')}
        >
          Completed
        </DashboardLink>
      </ul>
    </nav>
  );
}
