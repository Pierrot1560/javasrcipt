import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { PostList } from '../../Components/PostList/PostList';
import { Pagination } from '../../Components/Pagination/Pagination';
import { useMockFetch } from '../../Hooks/UseMockFetch';
import { largePosts, compactPosts } from '../../Data/mockPosts';
import './AllPosts.css';

interface AllPostsProps {
  onSearchClick?: () => void;
}

export function AllPosts({ onSearchClick }: AllPostsProps) {
  const { posts: large, isLoading: loadingLarge } = useMockFetch(largePosts);
  const { posts: compact, isLoading: loadingCompact } = useMockFetch(compactPosts);

  const isLoading = loadingLarge || loadingCompact;

  

  return (
    <div className="all-posts">
      <Header onSearchClick={onSearchClick} />

      <main className="all-posts__main">
        <h1 className="all-posts__title">Blog</h1>

        <div className="all-posts__tabs">
          <span className="all-posts__tab all-posts__tab--active">All</span>
          <span className="all-posts__tab">My favorites</span>
          <span className="all-posts__tab">Popular</span>
        </div>

        {isLoading ? (
          <p className="all-posts__loading">Loading posts...</p>
        ) : (
          <>
            <div className="all-posts__columns">
              <div className="all-posts__column all-posts__column--left">
                <PostList posts={large} variant="large" />
              </div>

              <div className="all-posts__column all-posts__column--right">
                <PostList posts={compact} variant="compact" />
              </div>
            </div>

            <Pagination />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}