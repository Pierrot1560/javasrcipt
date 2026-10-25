import { PostCard } from '../PostCard/PostCard';
import type { Post, PostCardVariant } from '../../Types/Post';
import './PostList.css';

interface PostListProps {
  posts: Post[];
  variant?: PostCardVariant;
  onPostClick?: (id: number) => void;
}

export function PostList({ posts, variant = 'large', onPostClick }: PostListProps) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <div 
          key={post.id} 
          onClick={() => onPostClick?.(post.id)} 
          style={{ cursor: onPostClick ? 'pointer' : 'default' }}
        >
          <PostCard post={post} variant={variant} />
        </div>
      ))}
    </div>
  );
}