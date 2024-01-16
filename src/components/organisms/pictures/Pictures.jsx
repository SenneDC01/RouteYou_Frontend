import React from 'react';
import styles from './Pictures.module.scss';
import Image from 'next/image';
import Image3 from '@/utils/images/sven-nys.png';
import FormField from '@/components/atoms/form-field/FormField';
import Button from '@/components/atoms/button/Button';

const imageEventMock = {
  message: 'Here are the images of the event',
  images: {
    current_page: 1,
    data: [
      {
        id: 1,
        event_id: 1,
        post_id: 1,
        image_url: Image3,
      },
      {
        id: 2,
        event_id: 1,
        post_id: 1,
        image_url: Image3,
      },
      {
        id: 3,
        event_id: 1,
        post_id: 1,
        image_url: Image3,
      },
      {
        id: 4,
        event_id: 1,
        post_id: 1,
        image_url: Image3,
      },
      {
        id: 5,
        event_id: 1,
        post_id: 1,
        image_url: Image3,
      },
      {
        id: 6,
        event_id: 1,
        post_id: 1,
        image_url: Image3,
      },
      {
        id: 7,
        event_id: 1,
        post_id: 1,
        image_url: Image3,
      },
    ],
    first_page_url:
      'http://stagingbackend-s3yyo4v6ta-ew.a.run.app/api/events/1/images?page=1',
    from: null,
    last_page: 1,
    last_page_url:
      'http://stagingbackend-s3yyo4v6ta-ew.a.run.app/api/events/1/images?page=1',
    links: [
      {
        url: null,
        label: '&laquo; Previous',
        active: false,
      },
      {
        url: 'http://stagingbackend-s3yyo4v6ta-ew.a.run.app/api/events/1/images?page=1',
        label: '1',
        active: true,
      },
      {
        url: null,
        label: 'Next &raquo;',
        active: false,
      },
    ],
    next_page_url: null,
    path: 'http://stagingbackend-s3yyo4v6ta-ew.a.run.app/api/events/1/images',
    per_page: 20,
    prev_page_url: null,
    to: null,
    total: 0,
  },
};
const handleSubmit = async (e) => {
  e.preventDefault();
  document.querySelector('form').setAttribute('data-submitted', 'true');
};

const Pictures = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {imageEventMock.images.data
          .reduce((pairs, image, index) => {
            if (index % 3 === 0) {
              pairs.push([
                image,
                imageEventMock.images.data[index + 1],
                imageEventMock.images.data[index + 2],
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
          ))}
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
};

export default Pictures;
