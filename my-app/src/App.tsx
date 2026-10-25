
import { Routes, Route} from 'react-router-dom';
import { SignIn } from './Pages/SignIn/SignIn';
import { Success } from './Pages/Success/Success';
import { SelectedPost } from './Pages/SelectedPost/SelectedPost';
import { SearchResults } from './Pages/SearchResults/SearchResults';
import { MainLayout } from './Layouts/MainLayout';
import { AllPosts } from './Pages/AllPosts/AllPosts';
import './App.css';

function App() {
  return (
    <div className="app">
      
      <Routes>

    <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/success" element={<Success />} />
        <Route path="/search" element={<SearchResults />} />
        
        
        <Route element={<MainLayout />}>
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/post/:id" element={<SelectedPost />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;