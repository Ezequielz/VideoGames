import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import { ListView } from '../games/views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/',
    element: <Navigate to="/" />
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);