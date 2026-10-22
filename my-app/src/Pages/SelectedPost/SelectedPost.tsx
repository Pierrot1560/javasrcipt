
import {
  FiThumbsUp,
  FiThumbsDown,
  FiBookmark,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { selectedPost } from '../../Data/mockPosts';
import './SelectedPost.css';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function SelectedPost() {
  return (
    <div className="selected-post">
      <Header />

      <main className="selected-post__main">
        <p className="selected-post__date">{formatDate(selectedPost.date)}</p>
        <h1 className="selected-post__title">{selectedPost.title}</h1>

        {selectedPost.image && (
          <img
            className="selected-post__image"
            src={selectedPost.image}
            alt={selectedPost.title}
          />
        )}
        <div className="selected-post__image" />

        <p className="selected-post__text">{selectedPost.text}</p>

        <div className="selected-post__actions">
          <div className="selected-post__reactions">
            <button className="selected-post__icon" aria-label="like">
              <FiThumbsUp />
            </button>
            <button className="selected-post__icon" aria-label="dislike">
              <FiThumbsDown />
            </button>
          </div>

          <div className="selected-post__reactions">
            <button className="selected-post__icon" aria-label="bookmark">
              <FiBookmark />
            </button>
            <button className="selected-post__icon" aria-label="more">
              <FiMoreHorizontal />
            </button>
          </div>
        </div>

        <button className="selected-post__add" type="button">
          Add to favorites
        </button>
      </main>

      <Footer />
    </div>
  );
}