import React, { useEffect, useState } from 'react';
import styles from './Pictures.module.scss';
import Image from 'next/image';
import FormField from '@/components/atoms/form-field/FormField';
import Button from '@/components/atoms/button/Button';
import { getPictures, postPictures } from '@/services/EventService';
import LoadingSpinner from "@/components/molecules/loading-spinner/LoadingSpinner";

export default function Pictures({ event }) {
  const [loading, setLoading] = useState(true);
  const [pictures, setPictures] = useState({ data: [] });

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await getPictures(event.id);
        if (response.code === 200) {
          setPictures(response.images);
        } else {
          console.error('Non-200 status code received');
        }
      } catch (error) {
        console.error('Error fetching pictures:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPictures();
  }, [event.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector('form').setAttribute('data-submitted', 'true');

    const fileInput = document.querySelector('input[name="event_image"]');
    const file = fileInput.files[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append('image', file);

        const uploadResponse = await postPictures(event.id, formData);

        if (uploadResponse.code === 201) {
          // fetchPictures();
        } else {
          console.error('Upload failed:', uploadResponse);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
      <div className={styles.container}>
        {loading ? (
            <LoadingSpinner
                isLoading={loading}
                message="Pictures loading"
            />
        ) : (
            <div className={styles.imageContainer}>
              {pictures && pictures.data
                  ? pictures.data
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
                  : <p>No images available</p>}
            </div>
        )}
        <form onSubmit={handleSubmit} className={styles.form} method="post">
          <div className={styles.fields}>
            <FormField name="event_image" type="file" data-testid="event_image" />
          </div>
          <Button className={styles.button} type="submit">
            Upload pictures
          </Button>
        </form>
      </div>
  );
}
