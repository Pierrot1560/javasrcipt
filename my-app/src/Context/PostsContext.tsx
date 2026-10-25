import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Post } from '../Types/Post';
import { PostsContext } from './Posts.constants';

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchPosts() {
      try {
        const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=100');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        const fetchedPosts = data.results || data;
        
        if (isMounted) {
          setPosts(fetchedPosts);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          alert('Ошибка при загрузке постов. Пожалуйста, проверьте соединение.');
          setIsLoading(false);
        }
      }
    }

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PostsContext.Provider value={{ posts, isLoading }}>
      {children}
    </PostsContext.Provider>
  );
}