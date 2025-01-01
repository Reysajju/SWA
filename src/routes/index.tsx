import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Gallery from '../pages/Gallery';
import FAQ from '../pages/FAQ';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/gallery',
    element: <Gallery />
  },
  {
    path: '/faq',
    element: <FAQ />
  }
];