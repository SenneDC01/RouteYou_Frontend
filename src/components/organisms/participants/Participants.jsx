import React, { useEffect, useState } from 'react';
import { getParticipants } from '@/services/EventService';
import StatusDropdown from '@/components/molecules/status-drop-down/StatusDropdown';
import styles from './Participants.module.scss';

const mockParticipants = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  // Add more mock participants as needed
];

const Participants = () => {
  const [participants, setParticipants] = useState([]);

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

  return (
    <div className={styles.container}>
      <h2>Participants:</h2>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id} className={styles.list}>
            {participant.name}
            <StatusDropdown></StatusDropdown>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Participants;
