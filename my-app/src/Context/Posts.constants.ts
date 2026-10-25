import { createContext } from 'react';
import type { Post } from '../Types/Post';

export interface PostsContextType {
  posts: Post[];
  isLoading: boolean;
}

export const PostsContext = createContext<PostsContextType | undefined>(undefined);