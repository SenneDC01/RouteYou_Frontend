import React, {useEffect, useState} from 'react';
import styles from './Pictures.module.scss';
import Image from 'next/image';
import FormField from '@/components/atoms/form-field/FormField';
import Button from '@/components/atoms/button/Button';
import {getPictures} from "@/services/EventService";

export default function Pictures({event}) {
  const [pictures, setPictures] = useState(null);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await getPictures(event.id);
        console.log(response);

        if (response.code === 200) {
          setPictures(response.images);
        } else {
          console.error('Non-200 status code received');
        }
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchPictures();
  }, [event.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.querySelector('form').setAttribute('data-submitted', 'true');
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {pictures && pictures.images && pictures.images.data
            ? pictures.images.data
                .reduce((pairs, image, index) => {
                  if (index % 3 === 0) {
                    pairs.push([
                      image,
                      pictures.images.data[index + 1],
                      pictures.images.data[index + 2],
                    ]);
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
                                      className={styles.image}
                                  />
                              )
                      )}
                    </div>
                ))
            : <p>No images available</p>}
      </div>
      <form onSubmit={handleSubmit} className={styles.form} method="post">
        <div className={styles.fields}>
          <FormField name="event_image" type="file" />
        </div>
        <Button className={styles.button} type="submit">
          Upload pictures
        </Button>
      </form>
    </div>
  );
}
