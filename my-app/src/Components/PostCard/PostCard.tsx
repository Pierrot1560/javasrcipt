import { useState } from 'react'; 
import { FiThumbsUp, FiThumbsDown, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import type { Post, PostCardVariant } from '../../Types/Post';
import './PostCard.css';

interface PostCardProps {
  post: Post;
  variant?: PostCardVariant;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function PostCard({ post, variant = 'large' }: PostCardProps) {
  const [hasError, setHasError] = useState(false);

  const imageUrl = post.image 
    ? (post.image.startsWith('http') ? post.image : `https://studapi.teachmeskills.by${post.image}`) 
    : null;


  const showImage = imageUrl && !hasError;

  return (
    <article className={`post-card post-card--${variant}`}>
      {showImage ? (
        <img 
          className="post-card__image" 
          src={imageUrl} 
          alt={post.title} 
          onError={() => setHasError(true)} 
        />
      ) : (
        <div className="post-card__image" /> 
      )}

      <div className="post-card__content">
        <p className="post-card__date">{formatDate(post.date)}</p>
        <h3 className="post-card__title">{post.title}</h3>

        {variant === 'large' && (
          <p className="post-card__text">{post.text}</p>
        )}

        <div className="post-card__actions">
          <div className="post-card__reactions">
            <button className="post-card__icon" aria-label="like"><FiThumbsUp /></button>
            <button className="post-card__icon" aria-label="dislike"><FiThumbsDown /></button>
          </div>
          <div className="post-card__reactions">
            <button className="post-card__icon" aria-label="bookmark"><FiBookmark /></button>
            <button className="post-card__icon" aria-label="more"><FiMoreHorizontal /></button>
          </div>
        </div>
      </div>
    </article>
  );
}