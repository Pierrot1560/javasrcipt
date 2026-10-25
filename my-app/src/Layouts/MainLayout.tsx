import { Outlet } from 'react-router-dom';
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import './MainLayout.css';

export function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-layout__content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}