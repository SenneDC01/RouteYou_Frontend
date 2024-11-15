import React, { useState } from 'react';
import Button from '@/components/atoms/button/Button';
import TextArea from '@/components/atoms/text-area/TextArea';
import FormField from '@/components/atoms/form-field/FormField';
import styles from './EditCreatePost.module.scss';
import { isEmpty, isFilled } from '@/helpers/FormValidation/FormValidation';
import { postPosts } from '@/services/EventService';

export default function EditCreatePost({ eventId, reloadPosts }) {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    images: [],
  });
  const [errors, setErrors] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const imageChange = (e) => {
    const files = e.target.files;
    setFormValues({ ...formValues, images: files });
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
    if (!isFilled(formValues.title)) {
      errors.title = 'Please enter a title';
    }
    if (!isFilled(formValues.message)) {
      errors.message = 'Please enter a description';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setIsUploading(true);

    try {
      const uploadResponse = await postPosts(eventId, e.currentTarget);

      if (uploadResponse.code === 200) {
        reloadPosts();
        setFormValues({ name: '', description: '', images: [] });
      }
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
          name="title"
          type="text"
          onChange={handleChange}
          errorMessage={errors.title}
        />
        <TextArea
          label="Description"
          name="message"
          onChange={handleChange}
          errorMessage={errors.message}
        />

        <FormField
          label="Event Image"
          name="images[]"
          type="file"
          onChange={imageChange}
          multiple={true}
        />
      </div>
      <Button className={styles.button} type="submit" disabled={isUploading}>
        {isUploading ? 'Uploading...' : 'Add post'}
      </Button>
    </form>
  );
}
