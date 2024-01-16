import React, { useState } from 'react';
import styles from './InviteUsersFrame.module.scss';
import InviteButton from '@/components/atoms/button/Button';

const InviteUsersFrame = ({ onClose, onInvite }) => {
    const [searchQuery, setSearchQuery] = useState('');

    /* eslint-disable */
    const handleInvite = (userId) => {
        onInvite(userId);
    };

    return (
        <div className={styles.container} role="dialog" aria-label="Invite Users">
            <input
                className={styles.searchBar}
                type="text"
                placeholder="Search users"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <ul></ul>
            <InviteButton className={styles.button} onClick={onClose}>
                Invite User
            </InviteButton>
        </div>
    );
};

export default InviteUsersFrame;
