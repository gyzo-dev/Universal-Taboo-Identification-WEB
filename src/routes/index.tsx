import { createBrowserRouter } from 'react-router-dom';

// pages
import Home from '@/pages/home/Home';
import About from '@/pages/about/About';
import News from '@/pages/news/News';
import Registration from '@/pages/registration/Registration';
import Contact from '@/pages/contact/Contact';

const routes = createBrowserRouter([
  {
    index: true,
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);

export default routes;
