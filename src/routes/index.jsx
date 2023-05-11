import { useRoutes } from 'react-router-dom';

import { homeRoute } from './ComponentRoutes/Home';
import { registerRoute } from './ComponentRoutes/Registration';
import { aboutRoute } from './ComponentRoutes/About';
import { contactRoute } from './ComponentRoutes/Contact';
import { newsRoute } from './ComponentRoutes/News';
import { errorRoute } from './ComponentRoutes/Error';
function RoutingSystem() {
  const routes = useRoutes([
    ...homeRoute,
    ...aboutRoute,
    ...contactRoute,
    ...newsRoute,
    ...registerRoute,
    errorRoute,
  ]);
  return routes;
}

export default RoutingSystem;
