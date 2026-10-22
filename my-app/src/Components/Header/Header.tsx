import { FiMenu, FiSearch, FiUser, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../Context/useTheme';
import './Header.css';

interface HeaderProps {
  onSearchClick?: () => void;
  onLogoClick?: () => void;
}

export function Header({ onSearchClick,onLogoClick }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <button className="header__icon" aria-label="menu">
        <FiMenu />
      </button>

      <div className="header__logo"onClick={onLogoClick} style={{ cursor: onLogoClick ? 'pointer' : 'default' }}>Blogger</div>

      <div className="header__actions">
        <button className="header__icon" onClick={toggleTheme} aria-label="toggle theme">
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
        <button className="header__icon" onClick={onSearchClick} aria-label="search">
          <FiSearch />
        </button>
        <button className="header__icon" aria-label="profile">
          <FiUser />
        </button>
      </div>
    </header>
  );
}