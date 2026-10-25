import { useState } from 'react';

import { FiMenu, FiSearch, FiUser, FiSun, FiMoon, FiX, FiHome, FiBookmark, FiLogOut, FiSettings } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../../Context/useTheme';
import './Header.css';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__left">
         
          <button className="header__icon" aria-label="menu" onClick={() => setIsSidebarOpen(true)}>
            <FiMenu />
          </button>

         
          <Link to="/posts" className="header__logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            Blogger
          </Link>
        </div>

        
        <form className="header__search" onSubmit={handleSearch}>
          <span className="header__search-icon">
            <FiSearch />
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="header__search-input"
          />
        </form>

        <div className="header__actions">
          <button className="header__icon" onClick={toggleTheme} aria-label="toggle theme">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          
          
          <div className="header__profile-wrapper">
            <button className="header__icon" aria-label="profile" onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <FiUser />
            </button>
            {isProfileOpen && (
              <div className="header__dropdown">
                <button className="header__dropdown-item"><FiUser /> Profile</button>
                <button className="header__dropdown-item"><FiSettings /> Settings</button>
                <button className="header__dropdown-item"><FiLogOut /> Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>

  
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}>
          <aside className="sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar__header">
              <span className="sidebar__title">Menu</span>
              <button className="header__icon" onClick={() => setIsSidebarOpen(false)}>
                <FiX />
              </button>
            </div>
            <nav className="sidebar__nav">
              <Link to="/posts" className="sidebar__link" onClick={() => setIsSidebarOpen(false)}>
                <FiHome /> Home
              </Link>
              <Link to="/favorites" className="sidebar__link" onClick={() => setIsSidebarOpen(false)}>
                <FiBookmark /> Favorites
              </Link>
            </nav>
            <div className="sidebar__footer">
              <span>©2022 Blogger</span>
              <div className="footer__socials">
             
                <span>IG</span> <span>FB</span> <span>YT</span>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}