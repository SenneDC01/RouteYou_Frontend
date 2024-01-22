import React, { useState } from 'react';
import styles from './InviteUsersFrame.module.scss';
import Button from '@/components/atoms/button/Button';
import { InviteUser } from '@/services/EventService';
import FormField from '@/components/atoms/form-field/FormField';

export default function InviteUsersFrame({
  onClose,
  eventId,
  reloadParticipants,
}) {
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      const emailValue = e.currentTarget.email.value.trim();
      if (!emailValue) {
        setErrorMessage('Please enter a user email.');
        return;
      }

      await InviteUser(eventId, e.currentTarget);
      setErrorMessage(null);
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrorMessage(error.response.data.message || 'User not found.');
      } else {
        setErrorMessage('An error occurred. Please try again.');
      }
    } finally {
      reloadParticipants();
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
          errorMessage={errorMessage}
          onChange={() => setErrorMessage(null)}
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
          Cancel
        </Button>
      </div>
    </form>
  );
}
