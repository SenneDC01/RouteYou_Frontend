import React, { useEffect, useState } from 'react';
import styles from './Pictures.module.scss';
import Image from 'next/image';
import FormField from '@/components/atoms/form-field/FormField';
import Button from '@/components/atoms/button/Button';
import { getPictures, postPictures } from '@/services/EventService';
import LoadingSpinner from '@/components/molecules/loading-spinner/LoadingSpinner';
import SmallText from '@/components/atoms/small-text/SmallText';

export default function Pictures({ event }) {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState({ data: [] });
  const [errorMessage, setErrorMessage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
      }
    };

    fetchData();
  }, [event.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector('form').setAttribute('data-submitted', 'true');

    const fileInput = document.querySelector('input[name="event_image"]');
    const file = fileInput.files[0];

    if (!file) {
      setErrorMessage('Please select an image to upload.');
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);

      const uploadResponse = await postPictures(event.id, formData);

      if (uploadResponse.code === 201) {
        // Successfully uploaded, no need to refetch pictures //zeker???
      } else {
        setErrorMessage('Error uploading image.');
      }
    } catch (error) {
      setErrorMessage('Error uploading image.');
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
            name="event_image"
            type="file"
            errorMessage={errorMessage}
            data-testid="event_image"
          />
          {isUploading && (
            <LoadingSpinner isLoading={isUploading} message="Uploading image" />
          )}
        </div>
        <Button className={styles.button} type="submit">
          Upload pictures
        </Button>
      </form>
    </div>
  );
}
