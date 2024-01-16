import React from 'react';
import styles from './Post.module.scss';
import Image from 'next/image';
import BoldText from '@/components/atoms/bold-text/BoldText';

const Post = ({ post }) => {
  return (
    <div className={styles.postContainer}>
      <div className={styles.textContainer}>
        <BoldText>{post.data.title}</BoldText>
        <p>{post.data.message}</p>
      </div>
      <div className={styles.imageContainer}>
        {post.data.images.map(
          (image, index) =>
            index % 2 === 0 && (
              <div key={index} className={styles.imagePair}>
                <Image src={image.image_url} alt="" className={styles.image} />
                {post.data.images[index + 1] && (
                  <Image
                    key={index + 1}
                    src={post.data.images[index + 1].image_url}
                    alt=""
                    className={styles.image}
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
};

export default Post;
