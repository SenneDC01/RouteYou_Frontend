import React from 'react';
import styles from './Posts.module.scss';
import Post from '@/components/molecules/post/Post';
import Image from '@/utils/images/banner.jpg';
import Image2 from '@/utils/images/CardImage.png';
import Image3 from '@/utils/images/logo.png';
import EditCreatePost from '@/components/molecules/edit-create-post/EditCreatePost';

const mockPosts = {
  message: 'Here are the images of the event',
  posts: [
    {
      current_page: 1,
      data: {
        id: 1,
        event_id: 1,
        title: 'Ontdek Aalst',
        message:
          "Wil je Aalst en haar gebouwen eens vanbinnen zien? Ben je benieuwd naar welke openbare plaatsen, maar ook scholen, café's en private plaatsen we allemaal dit jaar voor jullie in petto hebben? Wil je sportief het weekend inzetten? Dan is de City Light Run & Walk iets voor jou! Schreef je reeds in op een uitgestelde editie? Dan krijg je nog een mailtje van ons!",
        created_at: '2024-04-22 21:00:00',
        updated_at: '2024-04-22 21:00:00',
        images: [
          {
            id: 1,
            event_id: 1,
            post_id: 1,
            image_url: Image,
          },
          {
            id: 2,
            event_id: 1,
            post_id: 1,
            image_url: Image2,
          },
          {
            id: 3,
            event_id: 1,
            post_id: 1,
            image_url: Image3,
          },
        ],
      },
      first_page_url: 'http://localhost:8080/api/events/created?page=1',
      from: 1,
      last_page: 1,
      last_page_url: 'http://localhost:8080/api/events/created?page=1',
      links: [
        {
          '': {
            url: 'http://localhost:8080/api/events/created?page=1',
            label: '1',
            active: true,
          },
        },
      ],
      next_page_url: 'http://localhost:8080/api/events/created?page=1',
      path: 'http://localhost:8080/api/events/created',
      per_page: 10,
      prev_page_url: 'http://localhost:8080/api/events/created?page=1',
      to: 1,
      total: 1,
    },
    {
      current_page: 2,
      data: {
        id: 1,
        event_id: 1,
        title: 'Ontdek Aalst',
        message:
          "Wil je Aalst en haar gebouwen eens vanbinnen zien? Ben je benieuwd naar welke openbare plaatsen, maar ook scholen, café's en private plaatsen we allemaal dit jaar voor jullie in petto hebben? Wil je sportief het weekend inzetten? Dan is de City Light Run & Walk iets voor jou! Schreef je reeds in op een uitgestelde editie? Dan krijg je nog een mailtje van ons!",
        created_at: '2024-04-22 21:00:00',
        updated_at: '2024-04-22 21:00:00',
        images: [],
      },
      first_page_url: 'http://localhost:8080/api/events/created?page=1',
      from: 1,
      last_page: 1,
      last_page_url: 'http://localhost:8080/api/events/created?page=1',
      links: [
        {
          '': {
            url: 'http://localhost:8080/api/events/created?page=1',
            label: '1',
            active: true,
          },
        },
      ],
      next_page_url: 'http://localhost:8080/api/events/created?page=1',
      path: 'http://localhost:8080/api/events/created',
      per_page: 10,
      prev_page_url: 'http://localhost:8080/api/events/created?page=1',
      to: 1,
      total: 1,
    },
  ],
};

const Posts = () => {
  return (
    <div className={styles.container}>
      <EditCreatePost></EditCreatePost>
      {mockPosts.posts.map((post) => (
        <Post key={post.data.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
