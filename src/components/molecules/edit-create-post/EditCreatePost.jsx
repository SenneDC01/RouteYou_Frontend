import React, { useState } from 'react';
import Button from '@/components/atoms/button/Button';
import TextArea from '@/components/atoms/text-area/TextArea';
import FormField from '@/components/atoms/form-field/FormField';
import styles from './EditCreatePost.module.scss';
import { isEmpty, isFilled } from '@/helpers/FormValidation/FormValidation';
import { createEvent, postPictures, postPosts } from '@/services/EventService';

const EditCreatePost = ({ eventId }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

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
    document.querySelector('form').setAttribute('data-submitted', 'true');

    // const fileInput = document.querySelector('input[name="event_image"]');
    // const file = fileInput.files[0];

    const titleInput = document.querySelector('input[name="name"]');
    const descriptionInput = document.querySelector(
      'textarea[name="description"]'
    );

    const title = titleInput.value;
    const description = descriptionInput.value;

    if (!title || !description) {
      setErrorMessage('Please enter a title and description.');
      return;
    }

    setIsUploading(true);
    try {
      const postData = {
        title: title,
        message: description,
      };

      const uploadResponse = await postPosts(eventId, postData);

      console.log(postData);

      if (uploadResponse.code === 201) {
        setErrorMessage(null);
      } else {
        setErrorMessage('Error creating post.');
      }
    } catch (error) {
      setErrorMessage('Error creating post.');
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
      <Button className={styles.button} type="submit" disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Add post'}
      </Button>
    </form>
  );
};

export default EditCreatePost;
