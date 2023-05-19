import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';

function MainLayout() {
  return (
    <div>
      <Header />
      <Nav />
      <Outlet />
    </div>
  );
}

export default MainLayout;
