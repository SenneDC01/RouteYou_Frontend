import React, { useEffect, useState } from 'react';
import { getParticipants } from '@/services/EventService';
import StatusDropdown from '@/components/molecules/status-drop-down/StatusDropdown';
import SortDropdown from '@/components/molecules/sort-drop-down/SortDropdown';
import styles from './Participants.module.scss';
import InviteButton from '@/components/atoms/button/Button';
import InviteUsersFrame from '@/components/molecules/invite-users-frame/InviteUsersFrame';
import LoadingSpinner from '@/components/molecules/loading-spinner/LoadingSpinner';

export default function Participants({ event }) {
  const [participants, setParticipants] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [isInviteFrameOpen, setIsInviteFrameOpen] = useState(false);

  console.log(participants);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await getParticipants(event.id);

        if (response && response.code === 200) {
          setParticipants(response.participants.data || { data: [] });
        } else {
          console.error('Non-200 status code received or response is null');
        }
      } catch (error) {
        console.error('Error fetching participants:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [event.id]);

  const filteredParticipants = participants
    ? participants.filter((participant) =>
        participant.full_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  filteredParticipants.sort((a, b) => {
    if (sortKey === 'name') {
      return a.full_name.localeCompare(b.full_name);
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

  /* eslint-disable */
  const handleInviteUser = (userId) => {
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
      {loading && (
        <LoadingSpinner
          isLoading={loading}
          message="Participants loading"
          data-testid="loading-spinner"
        />
      )}
      <ul>
        {filteredParticipants.map((participant) => (
          <li key={participant.id} className={styles.list}>
            {participant.full_name}
            <StatusDropdown status={participant.status} />
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
}
