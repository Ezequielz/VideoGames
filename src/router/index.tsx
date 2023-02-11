import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Home } from '../components/views';
import { DetailView, GenreView, ListView, PlatformView } from '../games/views';

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
    path: '/games/platform/:platform',
    element: <PlatformView />
  },
  {
    path: '/games/genre/:genre',
    element: <GenreView />
  },
  {
    path: '*',
    element: <h1>Not found</h1>,
  },
]);