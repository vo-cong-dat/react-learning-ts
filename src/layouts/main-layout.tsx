import { Outlet } from 'react-router';
import Header from '../components/header.js';

export default function MainLayout() {
  return (
    <div className="bg-container">
      <Header />
      <Outlet />
    </div>
  );
}
