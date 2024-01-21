'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FormField from '@/components/atoms/form-field/FormField';
import SelectField from '@/components/atoms/select-field/SelectField';
import TextArea from '@/components/atoms/text-area/TextArea';
import RouteSelect from '@/components/atoms/route-select/RouteSelect';
import DateTimeField from '@/components/atoms/date-time-field/DateTimeField';
import BigTitle from '@/components/atoms/big-title/BigTitle';
import RegularText from '@/components/atoms/regular-text/RegularText';
import Button from '@/components/atoms/button/Button';
import { createEvent } from '@/services/EventService';
import {
  isEmpty,
  isFilled,
  arrayOnlyNumber,
  isValidDateTime,
  isPositiveInteger,
  isImage,
} from '@/helpers/FormValidation/FormValidation';
import styles from './CreateEventPage.module.scss';

export default function Page() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    routes_id: [],
    start_date: '',
    end_date: '',
    max_participants: '',
    price: '',
    visibility: '',
    event_image: '',
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
    const routesErrors = validateRoutes();
    const dateErrors = validateDate();
    const infoErrors = validateInfo();
    const imageErrors = validateImage();

    setErrors({
      ...textErrors,
      ...routesErrors,
      ...dateErrors,
      ...infoErrors,
      ...imageErrors,
      formError: errors.formError,
    });
    return (
      isEmpty(textErrors) &&
      isEmpty(routesErrors) &&
      isEmpty(dateErrors) &&
      isEmpty(infoErrors) &&
      isEmpty(imageErrors)
    );
  };

  const validateInfo = () => {
    const errors = {};
    if (!isFilled(formValues.max_participants)) {
      errors.max_participants = 'Please enter a max number of participants';
    }
    if (!isPositiveInteger(formValues.max_participants)) {
      errors.max_participants =
        'Please enter a positive integer, you cannot be with less the nobody or with 1/10 of a person';
    }
    if (!isFilled(formValues.price)) {
      errors.price = 'Please enter a price';
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

  const validateDate = () => {
    const errors = {};
    if (
      typeof formValues.start_date === 'string' &&
      !isFilled(formValues.start_date)
    ) {
      errors.start_date = 'Please enter a start date';
    } else if (!isValidDateTime(formValues.start_date)) {
      errors.start_date = 'Please enter a valid start date and time';
    }
    if (
      typeof formValues.end_date === 'string' &&
      !isFilled(formValues.end_date)
    ) {
      errors.end_date = 'Please enter a end date';
    } else if (!isValidDateTime(formValues.end_date)) {
      errors.end_date = 'Please enter a valid end date and time';
    }
    if (isEmpty(errors) && formValues.start_date.isAfter(formValues.end_date)) {
      errors.end_date = 'The end date should be after the start date';
    }
    return errors;
  };

  const validateRoutes = () => {
    const errors = {};
    if (formValues.routes_id) {
      errors.routes = 'Please select at least one route';
    }
    if (!arrayOnlyNumber(formValues.routes_id)) {
      errors.routes = 'One of the selected routes is invalid';
    }
    return errors;
  };

  const validateEventText = () => {
    const errors = {};
    if (!isFilled(formValues.name)) {
      errors.name = 'Please enter a title';
    }
    if (!isFilled(formValues.description)) {
      errors.description = 'Please enter a description';
    }
    return errors;
  };

  const validateImage = () => {
    const errors = {};
    if (!formValues.event_image) {
      errors.event_image = 'Please add an image';
    } else if (!isImage(formValues.event_image.type)) {
      errors.event_image = 'Please add a file of type image';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await createEvent(e.currentTarget);

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
    <div className={styles.detailPage}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        method="post"
        encType="multipart/form-data"
      >
        <div className={styles.top}>
          <BigTitle>Create an event</BigTitle>
        </div>
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
            type="text"
            onChange={handleChange}
            errorMessage={errors.name}
          />
          <TextArea
            label="Description"
            name="description"
            onChange={handleChange}
            errorMessage={errors.description}
          />
          {isMounted && (
            <RouteSelect
              id={'routes_id'}
              label="Routes"
              name="routes_id"
              placeholder="Search a route"
              onChange={handleChange}
              errorMessage={errors.routes}
            />
          )}
          <DateTimeField
            label="Start Date"
            name="start_date"
            onChange={handleChange}
            errorMessage={errors.start_date}
          />
          <DateTimeField
            label="End Date"
            name="end_date"
            onChange={handleChange}
            errorMessage={errors.end_date}
          />
          <FormField
            label="Max Participants"
            name="max_participants"
            type="number"
            onChange={handleChange}
            errorMessage={errors.max_participants}
          />
          <FormField
            label="Price"
            name="price"
            type="number"
            step={0.01}
            onChange={handleChange}
            errorMessage={errors.price}
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
      {formValues.routes_id.length ? (
        <iframe
          title="Interactive map with the route of the event"
          className={styles.map}
          key="1"
          id="iframe"
          src={`https://plugin.routeyou.com/routeviewer/basic/?key=25578206faf6c7cd92fc96526177379d&language=en&params.route.id=${formValues.routes_id[0]}&tabPane.position=null&map.api.key=AIzaSyAjwTWF01bBdAC3jSjbfdLGNuj5G6SVXq0&map.route.line.normal.standard.color=%2a2a2a&map.route.line.normal.standard.width=5&map.route.line.normal.standard.opacity=1&map.route.line.normal.standard.fill.color=%2a2a2a&map.route.line.normal.standard.fill.width=3&map.route.line.normal.standard.fill.opacity=0.7&map.route.line.normal.satellite.color=%2a2a2a&style.fill.color=%2a2a2a&style.fill.opacity=0.73&style.line.width=&style.line.color=%2a2a2a&map.type=terrain&map.show.startControl=true&map.show.instruction=true&map.show.positionData=true&`}
          allow="geolocation"
          allowFullScreen
        ></iframe>
      ) : (
        <div className={styles.noRoute}>
          <div className={styles.selectRouteInfo}>
            <RegularText>
              A route preview will be visible once you select one.
            </RegularText>
          </div>
          <iframe
            title="Empty map"
            className={styles.map}
            key="1"
            id="iframe"
            src={`https://plugin.routeyou.com/routeviewer/basic/?key=25578206faf6c7cd92fc96526177379d&language=en&map.zoom=4&tabPane.position=null&map.route.line.normal.standard.color=%2a2a2a&map.route.line.normal.standard.width=5&map.route.line.normal.standard.opacity=1&map.route.line.normal.standard.fill.color=%2a2a2a&map.route.line.normal.standard.fill.width=3&map.route.line.normal.standard.fill.opacity=0.7&map.route.line.normal.satellite.color=%2a2a2a&style.fill.color=%2a2a2a&style.fill.opacity=0.73&style.line.width=&style.line.color=%2a2a2a&map.type=terrain&map.show.startControl=true&map.show.instruction=true&map.show.positionData=true&`}
            allow="geolocation"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
