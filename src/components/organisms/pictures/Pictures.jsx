import React, { useEffect, useState } from 'react';
import styles from './Pictures.module.scss';
import Image from 'next/image';
import FormField from '@/components/atoms/form-field/FormField';
import Button from '@/components/atoms/button/Button';
import { getPictures, postPictures } from '@/services/EventService';
import LoadingSpinner from '@/components/molecules/loading-spinner/LoadingSpinner';
import SmallText from '@/components/atoms/small-text/SmallText';
import { isEmpty, isImage } from '@/helpers/FormValidation/FormValidation';

export default function Pictures({ event }) {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState({ data: [] });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formValues, setFormValues] = useState({
    images: [],
  });

  const imageChange = (e) => {
    const files = e.target.files;
    setFormValues({ ...formValues, images: files });
  };

  const validateImage = () => {
    const errors = {};
    const { images } = formValues;

    if (!images || images.length === 0) {
      errors.images = 'Please add at least one image file.';
    } else {
      for (let i = 0; i < images.length; i++) {
        if (!isImage(images[i].type)) {
          errors.images = 'Please add a file of type image.';
          break; // Stop checking if one image is invalid
        }
      }
    }

    return errors;
  };

  const fetchPictures = async () => {
    try {
      const response = await getPictures(event.id);
      if (response.code === 200) {
        setPictures(response.images);
      } else {
        setErrorMessage('Error loading pictures.');
      }
    } catch (error) {
      setErrorMessage('Error loading pictures.');
    } finally {
      setLoading(false);
      setIsUploading(false);
    }
  };

  useEffect(() => {
    fetchPictures();
  }, [event.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validateImage();

    if (!isEmpty(isValid)) {
      setErrorMessage(isValid.images);
      return;
    }

    setIsUploading(true);

    try {
      const uploadResponse = await postPictures(event.id, e.currentTarget);

      if (uploadResponse.code === 200) {
        fetchPictures();
        setFormValues({ images: [] });
        setErrorMessage(null);
      } else {
        setErrorMessage('Error uploading picture.');
      }
    } catch (error) {
      setErrorMessage('Error uploading picture.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <LoadingSpinner isLoading={loading} message="Pictures loading" />
      ) : (
        <div className={styles.imageContainer}>
          {pictures && pictures.data && pictures.data.length > 0 ? (
            pictures.data
              .reduce((pairs, image, index) => {
                if (index % 3 === 0) {
                  const pair = [image];
                  if (pictures.data[index + 1]) {
                    pair.push(pictures.data[index + 1]);
                  }
                  if (pictures.data[index + 2]) {
                    pair.push(pictures.data[index + 2]);
                  }
                  pairs.push(pair);
                }
                return pairs;
              }, [])
              .map((pair, pairIndex) => (
                <div key={pairIndex} className={styles.imagePair}>
                  {pair.map(
                    (img, imgIndex) =>
                      img && (
                        <Image
                          key={imgIndex}
                          src={img.image_url}
                          alt=""
                          data-testid={`image-${imgIndex}`}
                          className={`${styles.image} ${
                            pair.length === 2 ? styles.twoImagesInRow : ''
                          }`}
                          height={1000}
                          width={1000}
                        />
                      )
                  )}
                </div>
              ))
          ) : (
            <SmallText className={styles.errorMessage}>
              {pictures.data && pictures.data.length === 0
                ? 'No images available'
                : errorMessage}
            </SmallText>
          )}
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.form} method="post">
        <div className={styles.fields}>
          <FormField
            label="Event Image"
            name="images[]"
            type="file"
            onChange={imageChange}
            multiple={true}
            errorMessage={errorMessage}
          />
          {isUploading && (
            <LoadingSpinner isLoading={isUploading} message="Uploading image" />
          )}
        </div>
        <Button className={styles.button} type="submit" disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload pictures'}
        </Button>
      </form>
    </div>
  );
}
