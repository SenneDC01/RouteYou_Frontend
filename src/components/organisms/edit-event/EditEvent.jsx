'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormField from '@/components/atoms/form-field/FormField';
import SelectField from '@/components/atoms/select-field/SelectField';
import TextArea from '@/components/atoms/text-area/TextArea';
import RouteSelect from '@/components/atoms/route-select/RouteSelect';
import DateTimeField from '@/components/atoms/date-time-field/DateTimeField';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import Button from '@/components/atoms/button/Button';
import dayjs from 'dayjs';
import { editEvent } from '@/services/EventService';
import {
  isEmpty,
  isFilled,
  isPositiveInteger,
  isImage,
} from '@/helpers/FormValidation/FormValidation';
import styles from './EditEvent.module.scss';

export default function EditEvent({ event }) {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    name: event.name,
    description: event.description,
    routes_id: event.routes.map((route) => {
      return {
        value: route.route_data.id,
        label: route.route_data.name,
      };
    }),
    start_date: dayjs(event.start_date),
    end_date: dayjs(event.end_date),
    max_participants: event.max_participants,
    price: event.price,
    visibility: event.visibility,
    event_image: event.event_image,
  });
  const [errors, setErrors] = useState({});

  const visibilityOptions = [
    { value: 'PUBLIC', label: 'Public' },
    { value: 'PRIVATE', label: 'Private' },
  ];

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const imageChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.files[0] });
  };

  const validateForm = () => {
    const textErrors = validateEventText();

    const infoErrors = validateInfo();
    const imageErrors = validateImage();

    setErrors({
      ...textErrors,
      ...infoErrors,
      ...imageErrors,
      formError: errors.formError,
    });
    return isEmpty(textErrors) && isEmpty(infoErrors) && isEmpty(imageErrors);
  };

  const validateInfo = () => {
    const errors = {};
    if (!isFilled(formValues.max_participants)) {
      errors.max_participants = 'Please enter a max number of participants';
    }
    if (formValues.max_participants < event.max_participants) {
      errors.max_participants = `Please enter a max number of participants greater of equal to the current.(${event.max_participants})`;
    }
    if (!isPositiveInteger(formValues.max_participants)) {
      errors.max_participants =
        'Please enter a positive integer, you cannot be with less the nobody or with 1/10 of a person';
    }
    if (!isFilled(formValues.visibility)) {
      errors.visibility = 'Please select a visibility';
    } else if (
      !visibilityOptions
        .map((option) => option.value)
        .includes(formValues.visibility)
    ) {
      errors.visibility = 'Please select a valid visibility';
    }
    return errors;
  };

  const validateEventText = () => {
    const errors = {};
    if (!isFilled(formValues.description)) {
      errors.description = 'Please enter a description';
    }
    return errors;
  };

  const validateImage = () => {
    const errors = {};
    if (!formValues.event_image && !isImage(formValues.event_image.type)) {
      errors.event_image = 'Please add a file of type image';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('valid');
      try {
        const response = await editEvent(e.currentTarget);

        if (response.code === 201) {
          router.push('/dashboard/created');
        } else {
          if (response.errors) {
            const errors = [];
            Object.keys(response.errors).forEach((field) => {
              errors.push(response.errors[field][0]);
            });
            setErrors({ formError: errors });
          } else if (response.message) {
            setErrors({ formError: [response.message] });
          }
        }
      } catch (error) {
        setErrors({ formError: ['Something went wrong try again later.'] });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
      method="post"
      encType="multipart/form-data"
    >
      {errors?.formError && (
        <>
          <ul>
            {errors.formError?.map((error, index) => (
              <li className={styles.error} key={index}>
                {error}
              </li>
            ))}
          </ul>
        </>
      )}
      <div className={styles.fields}>
        <FormField
          label="Title"
          name="name"
          value={event.name}
          type="text"
          onChange={handleChange}
          errorMessage={errors.name}
          disabled={true}
        />
        <TextArea
          label="Description"
          name="description"
          value={event.description}
          onChange={handleChange}
          errorMessage={errors.description}
        />
        <RouteSelect
          label="Routes"
          name="routes_id"
          placeholder="Search a route"
          value={formValues.routes_id}
          onChange={handleChange}
          errorMessage={errors.routes}
          disabled={true}
        />
        <DateTimeField
          label="Start Date"
          name="start_date"
          value={formValues.start_date}
          onChange={handleChange}
          errorMessage={errors.start_date}
          disabled={true}
        />
        <DateTimeField
          label="End Date"
          name="end_date"
          value={formValues.end_date}
          onChange={handleChange}
          errorMessage={errors.end_date}
          disabled={true}
        />
        <FormField
          label="Max Participants"
          name="max_participants"
          type="number"
          min={event.max_participants}
          value={event.max_participants}
          onChange={handleChange}
          errorMessage={errors.max_participants}
        />
        <FormField
          label="Price"
          name="price"
          type="number"
          step={0.01}
          value={event.price}
          onChange={handleChange}
          errorMessage={errors.price}
          disabled={true}
        />
        <SelectField
          label="Visibility"
          name="visibility"
          options={visibilityOptions}
          value={formValues.visibility}
          onChange={handleChange}
          errorMessage={errors.visibility}
        />
        <FormField
          label="Event Image"
          name="event_image"
          type="file"
          onChange={imageChange}
          errorMessage={errors.event_image}
        />
        <Button className={styles.submitButton} type="submit">
          Create Event
        </Button>
      </div>
    </form>
  );
}
