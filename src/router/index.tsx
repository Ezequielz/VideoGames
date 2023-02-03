import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../App';
import { DetailView, ListView } from '../games/views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/game/detail/:id',
    element: <DetailView />
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);