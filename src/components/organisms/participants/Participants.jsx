import React, { useState } from 'react';
import {getParticipants} from '@/services/EventService';
import StatusDropdown from '@/components/molecules/status-drop-down/StatusDropdown';
import SortDropdown from '@/components/molecules/sort-drop-down/SortDropdown';
import styles from './Participants.module.scss';
import InviteButton from '@/components/atoms/button/Button';
import InviteUsersFrame from '@/components/molecules/invite-users-frame/InviteUsersFrame';
// import { redirect } from 'next/navigation';

const getEventParticipants = async (eventId) => {
  try {
    const response = await getParticipants(eventId);

    if (response.code !== 200) {
      // redirect('/');
    }
    return response;
  } catch (error) {
    // redirect('/');
  }
};
export default async function Participants({event}) {
  const {participants} = await getEventParticipants(event.id);
  console.log(participants)

  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState(null);
  const [isInviteFrameOpen, setIsInviteFrameOpen] = useState(false);

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
              <SortDropdown onSortChange={handleSortChange}/>
            </div>
          </div>
          <div>
            <br/>
            <InviteButton className={styles.button} onClick={handleInviteClick}>
              Invite Users
            </InviteButton>
          </div>
        </div>
        <ul>
          {filteredParticipants.map((participant) => (
              <li key={participant.id} className={styles.list}>
                {participant.name}
                <StatusDropdown/>
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
