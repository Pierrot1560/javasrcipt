
import {
  FiThumbsUp,
  FiThumbsDown,
  FiBookmark,
  FiMoreHorizontal,
} from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { largePosts } from '../../Data/mockPosts';
import './SearchResults.css';



function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function SearchResults() {

  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || 'Astronauts';
  const results = [...largePosts, ...largePosts].slice(0, 6);

  return (
    <div className="search-results">
      <Header />

      <main className="search-results__main">
        <h1 className="search-results__title">Search results '{query}'</h1>

        <div className="search-results__list">
          {results.map((post, index) => (
            <article key={`${post.id}-${index}`} className="search-results__item">
              {post.image && (
                <img
                  className="search-results__image"
                  src={post.image}
                  alt={post.title}
                />
              )}
              
              <div className="search-results__content">
                <p className="search-results__date">{formatDate(post.date)}</p>
                <h3 className="search-results__item-title">{post.title}</h3>
                <p className="search-results__text">{post.text}</p>
                
                <div className="search-results__actions">
                  <div className="search-results__reactions">
                    <button className="search-results__icon" aria-label="like">
                      <FiThumbsUp />
                    </button>
                    <button className="search-results__icon" aria-label="dislike">
                      <FiThumbsDown />
                    </button>
                  </div>
                  <div className="search-results__reactions">
                    <button className="search-results__icon" aria-label="bookmark">
                      <FiBookmark />
                    </button>
                    <button className="search-results__icon" aria-label="more">
                      <FiMoreHorizontal />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="search-results__show-more" type="button">
          Show more
        </button>
      </main>

      <Footer />
    </div>
  );
}