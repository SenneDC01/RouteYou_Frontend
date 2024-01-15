import React, { useState } from 'react';
import Button from '@/components/atoms/button/Button';
import TextArea from '@/components/atoms/text-area/TextArea';
import FormField from '@/components/atoms/form-field/FormField';
import styles from './EditCreatePost.module.scss';
import { isEmpty, isFilled } from '@/helpers/FormValidation/FormValidation';
import { createEvent } from '@/services/EventService';

const EditCreatePost = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const imageChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.files[0] });
  };

  const validateForm = () => {
    const textErrors = validateEventText();

    setErrors({
      ...textErrors,
      formError: errors.formError,
    });
    return isEmpty(textErrors);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await createEvent(e.currentTarget);

        if (response.code === 201) {
          print('post added');
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
        <FormField
          label="Event Image"
          name="event_image"
          type="file"
          onChange={imageChange}
        />
      </div>
      <Button className={styles.button} type="submit">
        Add post
      </Button>
    </form>
  );
};

export default EditCreatePost;
