import { PostCard } from '../PostCard/PostCard';
import type { Post, PostCardVariant } from '../../Types/Post';
import './PostList.css';

interface PostListProps {
  posts: Post[];
  variant?: PostCardVariant;
}

export function PostList({ posts, variant = 'large' }: PostListProps) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} variant={variant} />
      ))}
    </div>
  );
}