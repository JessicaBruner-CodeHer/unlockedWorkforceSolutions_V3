import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import LandingPage from '../pages/LandingPage'
import AboutPage from '../pages/AboutPage'
import ServicesPage from '../pages/ServicesPage'
import ContactPage from '../pages/ContactPage'
import JobBoardPage from '../pages/JobBoardPage'
import LoginPage from '../pages/LoginPage'
import PortalDashboardPage from '../pages/PortalDashboardPage'
import PortalJobsPage from '../pages/PortalJobsPage'
import PortalJobsListPage from '../pages/PortalJobsListPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProtectedRoute from '../components/ui/ProtectedRoute'

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
      {
        path: 'portal/dashboard',
        element: (
          <ProtectedRoute>
            <PortalDashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'portal/jobs',
        element: (
          <ProtectedRoute>
            <PortalJobsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'portal/jobs/list',
        element: (
          <ProtectedRoute>
            <PortalJobsListPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

export default router