import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from '../pages/LandingPage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import JobBoardPage from '../pages/JobBoardPage';
import LoginPage from '../pages/LoginPage';
import PortalDashboardPage from '../pages/PortalDashboardPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'jobs', element: <JobBoardPage /> },
      { path: 'portal/login', element: <LoginPage /> },
      { path: 'portal/dashboard', element: <PortalDashboardPage /> }
    ]
  }
]);

export default router;