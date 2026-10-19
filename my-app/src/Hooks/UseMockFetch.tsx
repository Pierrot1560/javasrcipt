import { useEffect, useState } from 'react';
import type { Post } from '../Types/Post'; 

export function useMockFetch(source: Post[], intervalMs = 2000) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    
    setPosts([]);
    setIsLoading(true);

    let index = 0;

    const intervalId = setInterval(() => {

      const nextPost = source[index];

      if (!nextPost) {
        clearInterval(intervalId);
        setIsLoading(false);
        return;
      }

      setPosts((prev) => [...prev, nextPost]);
      index += 1;
    }, intervalMs);

    return () => {
      clearInterval(intervalId);
    };
  }, [source, intervalMs]);

  return { posts, isLoading };
}