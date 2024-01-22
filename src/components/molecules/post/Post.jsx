import React from 'react';
import styles from './Post.module.scss';
import Image from 'next/image';
import BoldText from '@/components/atoms/bold-text/BoldText';

export default function Post({ post }) {
  return (
    <div className={styles.postContainer} data-testid="post">
      <div className={styles.textContainer}>
        <BoldText>{post.title}</BoldText>
        <p>{post.message}</p>
      </div>
      <div className={styles.imageContainer}>
        {post.images.map(
          (image, index) =>
            index % 2 === 0 && (
              <div key={index} className={styles.imagePair}>
                <Image
                  src={image.image_url}
                  alt=""
                  className={styles.image}
                  height={1000}
                  width={1000}
                />
                {post.images[index + 1] && (
                  <Image
                    key={index + 1}
                    src={post.images[index + 1].image_url}
                    alt=""
                    className={styles.image}
                    height={1000}
                    width={1000}
                  />
                )}
              </div>
            )
        )}
      </div>
      <a href="/events/1/manage-event/edit" className={styles.edit}>
        edit
      </a>
    </div>
  );
}
