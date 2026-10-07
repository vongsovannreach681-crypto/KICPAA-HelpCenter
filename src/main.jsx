import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ATQProgram from './pages/ATQProgram';
import SubjectCourse from './pages/SubjectCourse';
import RootLayout from './components/common/RootLayout';
import ATQexam from './pages/ATQexam';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/atq-program',
        element: <ATQProgram />,
      },
      {
        path: '/subject-course',
        element: <SubjectCourse />,
      },
      {
        path: '/atq-examination',
        element: <ATQexam />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);