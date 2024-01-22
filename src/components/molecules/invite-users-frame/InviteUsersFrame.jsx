import React, { useState } from 'react';
import styles from './InviteUsersFrame.module.scss';
import Button from '@/components/atoms/button/Button';
import { InviteUser } from '@/services/EventService';
import FormField from '@/components/atoms/form-field/FormField';

const InviteUsersFrame = ({ onClose, eventId }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    console.log(e.currentTarget);
    console.log(eventId);

    try {
      await InviteUser(eventId, e.currentTarget);
    } catch (error) {
      /* empty */
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      method="post"
      encType="multipart/form-data"
      data-testid="edit-create-post"
    >
      <div className={styles.container} role="dialog" aria-label="Invite Users">
        <FormField
          className={styles.searchBar}
          label="Search user"
          placeholder="User email"
          name="email"
          type="text"
        />
        <Button
          className={styles.button}
          type="submit"
          disabled={isUploading}
          data-testid="InviteButton"
        >
          {isUploading ? 'Inviting...' : 'Invite user'}
        </Button>
        <Button className={styles.close} onClick={onClose}>
          Close
        </Button>
      </div>
    </form>
  );
};

export default InviteUsersFrame;
