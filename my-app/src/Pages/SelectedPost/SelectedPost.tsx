import { useState } from 'react'; 
import { FiThumbsUp, FiThumbsDown, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { usePosts } from '../../Context/usePosts';
import './SelectedPost.css';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function SelectedPost() {
  const { id } = useParams<{ id: string }>();
  const { posts, isLoading } = usePosts();
  

  const [hasError, setHasError] = useState(false);

  const post = posts.find((p) => p.id === Number(id));

  if (isLoading) return <div className="selected-post__loading">Loading post...</div>;
  if (!post) return <div className="selected-post__error">Post not found</div>;

  const imageUrl = post.image 
    ? (post.image.startsWith('http') ? post.image : `https://studapi.teachmeskills.by${post.image}`) 
    : null;

  const showImage = imageUrl && !hasError;

  return (
    <div className="selected-post">
      <p className="selected-post__date">{formatDate(post.date)}</p>
      <h1 className="selected-post__title">{post.title}</h1>

      {showImage ? (
        <img 
          className="selected-post__image" 
          src={imageUrl} 
          alt={post.title} 
          onError={() => setHasError(true)} 
        />
      ) : (
        <div className="selected-post__image" />
      )}

      <p className="selected-post__text">{post.text}</p>

      <div className="selected-post__actions">
        <div className="selected-post__reactions">
          <button className="selected-post__icon" aria-label="like"><FiThumbsUp /></button>
          <button className="selected-post__icon" aria-label="dislike"><FiThumbsDown /></button>
        </div>
        <div className="selected-post__reactions">
          <button className="selected-post__icon" aria-label="bookmark"><FiBookmark /></button>
          <button className="selected-post__icon" aria-label="more"><FiMoreHorizontal /></button>
        </div>
      </div>

      <button className="selected-post__add" type="button">Add to favorites</button>
    </div>
  );
}