import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Home } from '../components/views';
import { DetailView, ListView } from '../games/views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
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