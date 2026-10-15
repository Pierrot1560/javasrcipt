import { FiMenu, FiSearch, FiUser } from 'react-icons/fi';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <button className="header__icon" aria-label="menu">
        <FiMenu />
      </button>

      <div className="header__logo">Blogger</div>

      <div className="header__actions">
        <button className="header__icon" aria-label="search">
          <FiSearch />
        </button>
        <button className="header__icon" aria-label="profile">
          <FiUser />
        </button>
      </div>
    </header>
  );
}