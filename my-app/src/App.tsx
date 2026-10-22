

import { useState } from 'react';
import { SignIn } from './Pages/SignIn/SignIn';
import { Success } from './Pages/Success/Success';
import { AllPosts } from './Pages/AllPosts/AllPosts';
import { SelectedPost } from './Pages/SelectedPost/SelectedPost';
import './App.css';
import { SearchResults } from './Pages/SearchResults/SearchResults';

type Page = 'signIn' | 'success' | 'allPosts' | 'selectedPost'| 'searchResults';

function App() {
  const [page, setPage] = useState<Page>('signIn');

  return (
    <div className="app">
      {page === 'signIn' && <SignIn onSuccess={() => setPage('success')} />}
      {page === 'success' && <Success onGoHomeClick={() => setPage('allPosts')} />}
      {page === 'allPosts' && <AllPosts onSearchClick={() => setPage('searchResults')} />}

      {page === 'selectedPost' && <SelectedPost />}
      {page === 'searchResults' && (<SearchResults onBackToAllPosts={() => setPage('allPosts')} />)}
    </div>
  );
}

export default App;