import { Outlet } from 'react-router-dom';

import Header from '@/components/Header/Header';

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
