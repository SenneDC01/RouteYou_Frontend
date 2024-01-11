'use client';
import React from 'react';
import styles from './ManageEventPage.module.scss';
import Participants from '@/components/organisms/participants/Participants';
import ManageEventDropDown from '@/components/molecules/manage-event-drop-down/ManageEventDropDown';

export default function ManageEventPage({ event }) {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>Name: {event.name}</div>
      <div className={styles.rightColumn}>
        <ManageEventDropDown title="Edit"></ManageEventDropDown>
        <ManageEventDropDown
          title="Participants"
          comp={Participants}
        ></ManageEventDropDown>
        <ManageEventDropDown title="Posts"></ManageEventDropDown>
        <ManageEventDropDown title="Pictures"></ManageEventDropDown>
      </div>
    </div>
  );
}
