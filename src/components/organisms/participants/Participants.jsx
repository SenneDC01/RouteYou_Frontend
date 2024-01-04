import React, { useEffect, useState } from 'react';
import { getParticipants } from '@/services/EventService';
import StatusDropdown from '@/components/molecules/status-drop-down/StatusDropdown';
import SortDropdown from '@/components/molecules/sort-drop-down/SortDropdown';
import styles from './Participants.module.scss';
import InviteButton from '@/components/atoms/button/Button';
import InviteUsersFrame from '@/components/molecules/invite-users-frame/InviteUsersFrame';

const mockParticipants = [
  { id: 1, name: 'John Doe', date: '2023-01-01' },
  { id: 2, name: 'Jane Doe', date: '2023-02-01' },
  { id: 3, name: 'Senne De Cock', date: '2023-03-01' },
];

const Participants = () => {
  const [participants, setParticipants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [isInviteFrameOpen, setIsInviteFrameOpen] = useState(false);

  useEffect(() => {
    const fetchParticipants = async () => {
      const participantsData = await getParticipants();

      if (participantsData) {
        setParticipants(participantsData);
      } else {
        setParticipants(mockParticipants);
        console.error('Failed to fetch participants.');
      }
    };

    fetchParticipants();
  }, []);

  const filteredParticipants = participants
    .filter((participant) =>
      participant.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortKey === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortKey === 'date') {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

  const handleSortChange = (key) => {
    setSortKey(key);
  };

  const handleInviteClick = () => {
    setIsInviteFrameOpen(true);
  };

  const handleCloseInviteFrame = () => {
    setIsInviteFrameOpen(false);
  };

  const handleInviteUser = (userId) => {
    // Implement the logic to send an invitation
    console.log(`Inviting user with ID: ${userId}`);
    setIsInviteFrameOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.searchContainer}>
          <div>
            <p>Search Participants</p>
            <input
              className={styles.searchBar}
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>
            <p>Sort</p>
            <SortDropdown onSortChange={handleSortChange} />
          </div>
        </div>
        <div>
          <br />
          <InviteButton className={styles.button} onClick={handleInviteClick}>
            Invite Users
          </InviteButton>
        </div>
      </div>
      <ul>
        {filteredParticipants.map((participant) => (
          <li key={participant.id} className={styles.list}>
            {participant.name}
            <StatusDropdown />
          </li>
        ))}
      </ul>
      {isInviteFrameOpen && (
        <InviteUsersFrame
          onClose={handleCloseInviteFrame}
          onInvite={handleInviteUser}
        />
      )}
    </div>
  );
};

export default Participants;
