import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ATQProgram from './pages/ATQProgram';
import SubjectCourse from './pages/SubjectCourse';
import RootLayout from './components/common/RootLayout';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);