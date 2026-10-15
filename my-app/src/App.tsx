

import { useState } from 'react';
import { SignIn } from './Pages/SignIn/SignIn';
import { Success } from './Pages/Success/Success';
import { AllPosts } from './Pages/AllPosts/AllPosts';
import { SelectedPost } from './Pages/SelectedPost/SelectedPost';
import './App.css';

type Page = 'signIn' | 'success' | 'allPosts' | 'selectedPost';

function App() {
  const [page, setPage] = useState<Page>('signIn');

  return (
    <div className="app">
      {page === 'signIn' && <SignIn onSuccess={() => setPage('success')} />}
      {page === 'success' && <Success onGoHome={() => setPage('allPosts')} />}
      {page === 'allPosts' && <AllPosts />}
      {page === 'selectedPost' && <SelectedPost />}
    </div>
  );
}

export default App;