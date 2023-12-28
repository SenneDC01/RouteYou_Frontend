import React, { useState } from 'react';
import styles from './InviteUsersFrame.module.scss';
import InviteButton from '@/components/atoms/button/Button';

const InviteUsersFrame = ({ onClose, onInvite }) => {
  const [searchQuery, setSearchQuery] = useState('');
  // Fetch users based on the search query

  const handleInvite = (userId) => {
    // Implement the logic to send an invitation
    onInvite(userId);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Search users"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {/* Display a list of users based on the search query */}
      <ul>
        {/* Map through the fetched users and display them */}
        {/* Each user item could have a button to invite them */}
      </ul>
      <InviteButton className={styles.button} onClick={onClose}>
        Invite User
      </InviteButton>
    </div>
  );
};

export default InviteUsersFrame;
