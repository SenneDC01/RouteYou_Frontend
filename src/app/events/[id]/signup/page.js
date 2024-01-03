'use client';
import DetailColumn from '@/components/organisms/detail-column/DetailColumn';
import React, { useState } from 'react';
import styles from './SignUpPage.module.scss';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import RegularText from '@/components/atoms/regular-text/RegularText';
import Button from '@/components/atoms/button/Button';
import FormField from '@/components/atoms/form-field/FormField';
import ButtonLink from '@/components/atoms/button-link/ButtonLink';
import SecondaryButton from '@/components/atoms/secondary-button/SecondaryButton';
import AddSVG from '@/utils/icons/AddSVG';
import BoldText from '@/components/atoms/bold-text/BoldText';
import TrashSVG from '@/utils/icons/TrashSVG';
import {
  isEmpty,
  isFilled,
  isValidEmail,
} from '@/helpers/FormValidation/FormValidation';
import { signUpEvent } from '@/services/EventService';
import SignUpBill from '@/components/molecules/signup-bill/SignUpBill';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/molecules/loading-spinner/LoadingSpinner';

export default function SignUpPage({ event }) {
  const router = useRouter();
  const [groupMembers, setGroupMembers] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleGroupMembers = () => {
    setErrors([]);
    setGroupMembers(
      groupMembers ? null : [{ firstname: '', lastname: '', email: '' }]
    );
  };

  const addGroupMember = () => {
    setGroupMembers([
      ...groupMembers,
      { firstname: '', lastname: '', email: '' },
    ]);
  };

  const removeGroupMember = (index) => {
    if (groupMembers.length === 1) {
      setGroupMembers(null);
      setErrors([]);
      return;
    }
    const newGroupMembers = [...groupMembers];
    newGroupMembers.splice(index, 1);
    setGroupMembers(newGroupMembers);
  };

  const onValueChange = (e, index) => {
    const newGroupMembers = [...groupMembers];
    newGroupMembers[index][e.target.name] = e.target.value;
    setGroupMembers(newGroupMembers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateGroupMembers();
    if (isValid) {
      try {
        setIsLoading(true);
        const response = await signUpEvent(event.id, groupMembers);
        if (response.code === 200) {
          router.push(`/events/${event.id}/ticket`);
        } else {
          setErrors({ formError: response.message });
        }
      } catch (error) {
        setErrors({
          formError: 'You were unable to register, please try again later.',
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const validateGroupMembers = () => {
    const newErrors = [];
    let isValid = true;
    if (groupMembers) {
      groupMembers.forEach((groupMember) => {
        const errors = {};
        if (!isFilled(groupMember.firstname)) {
          errors.firstname = 'Please enter a firstname';
        }
        if (!isFilled(groupMember.lastname)) {
          errors.lastname = 'Please enter a lastname';
        }
        if (!isValidEmail(groupMember.email)) {
          errors.email = 'Please enter an email';
        }
        if (isValid) {
          isValid = isEmpty(errors);
        }
        newErrors.push(errors);
      });
    }
    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className={styles.page}>
      <div className={styles.eventInfo}>
        <DetailColumn event={event} />
      </div>
      <div className={styles.signUp}>
        <BigTitle>Sign Up</BigTitle>
        <RegularText>
          Register for {event.name}. For groups or families it is possible to
          register multiple group members.
        </RegularText>
        <Button onClick={toggleGroupMembers}>
          {groupMembers ? 'Remove group members' : 'Add group members'}
        </Button>

        <form
          onSubmit={handleSubmit}
          method="post"
          className={styles.signUpForm}
        >
          {errors.formError && (
            <p className={styles.error}>{errors.formError}</p>
          )}
          {groupMembers && (
            <div>
              {groupMembers.map((groupMember, index) => (
                <div key={index} className={styles.formGroup}>
                  <div className={styles.groupMemberHead}>
                    <BoldText>Member {index + 1}</BoldText>
                    <SecondaryButton
                      icon={<TrashSVG />}
                      onClick={() => removeGroupMember(index)}
                    >
                      Remove
                    </SecondaryButton>
                  </div>
                  <FormField
                    label="Firstname"
                    name="firstname"
                    type="text"
                    value={groupMember.firstname}
                    onChange={(e) => onValueChange(e, index)}
                    errorMessage={errors[index]?.firstname}
                  />
                  <FormField
                    label="Lastname"
                    name="lastname"
                    type="text"
                    value={groupMember.lastname}
                    onChange={(e) => onValueChange(e, index)}
                    errorMessage={errors[index]?.lastname}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={groupMember.email}
                    onChange={(e) => onValueChange(e, index)}
                    errorMessage={errors[index]?.email}
                  />
                </div>
              ))}
              <SecondaryButton icon={<AddSVG />} onClick={addGroupMember}>
                Add group member
              </SecondaryButton>
            </div>
          )}
          <SignUpBill
            eventPrice={event.price}
            numberOfGroupMembers={groupMembers?.length}
          />
          <div className={styles.buttonGroup}>
            <ButtonLink
              link={`/events/${event.id}`}
              className={styles.cancelButton}
            >
              Cancel
            </ButtonLink>
            <Button type="submit">Sign up</Button>
          </div>
          <LoadingSpinner
            isLoading={isLoading}
            message="Signing up and generating your ticket."
          />
        </form>
      </div>
    </div>
  );
}
