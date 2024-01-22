import React, { useEffect, useState } from 'react';
import styles from './Posts.module.scss';
import Post from '@/components/molecules/post/Post';
import EditCreatePost from '@/components/molecules/edit-create-post/EditCreatePost';
import { getPosts } from '@/services/EventService';
import LoadingSpinner from '@/components/molecules/loading-spinner/LoadingSpinner';

export default function Posts({ event }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState({ data: [] });

  const fetchPosts = async () => {
    try {
      const response = await getPosts(event.id);
      if (response.code === 200) {
        setPosts(response.posts || { data: [] });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [event.id]);

  return (
    <div className={styles.container}>
      <EditCreatePost
        eventId={event.id}
        reloadPosts={() => fetchPosts()}
      ></EditCreatePost>
      {loading ? (
        <LoadingSpinner
          isLoading={loading}
          message="Posts loading"
          data-testid="loading-spinner"
        />
      ) : posts && posts.data ? (
        posts.data.map((post) => post && <Post key={post.id} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}
