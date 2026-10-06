import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ATQProgram from './pages/ATQProgram';
import SubjectCourse from './pages/SubjectCourse';
const router = createBrowserRouter([
 {
  path: '/',
  element: <App />,
 },
 {
  path: '/atq-program',
  element: <ATQProgram/>,
 },
 {
    path: '/subject-course',
    element: <SubjectCourse/>,
 }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
);