import { useNavigate, useSearchParams } from 'react-router-dom'; 
import { PostList } from '../../Components/PostList/PostList';
import { Pagination } from '../../Components/Pagination/Pagination';
import { usePosts } from '../../Context/usePosts';
import './AllPosts.css';

export function AllPosts() {
  const { posts, isLoading } = usePosts();
  const navigate = useNavigate();
  

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const largePosts = currentPosts.slice(0, 5);
  const compactPosts = currentPosts.slice(5, 10);

  const totalPages = Math.ceil(posts.length / postsPerPage);


  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <div className="all-posts">
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
              <PostList posts={largePosts} variant="large" onPostClick={(id) => navigate(`/post/${id}`)} />
            </div>

            <div className="all-posts__column all-posts__column--right">
              <PostList posts={compactPosts} variant="compact" onPostClick={(id) => navigate(`/post/${id}`)} />
            </div>
          </div>
          
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={handlePageChange} 
            />
          )}
        </>
      )}
    </div>
  );
}