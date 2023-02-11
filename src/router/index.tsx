import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Home } from '../components/views';
import { DetailView, GenreView, ListView, PlatformView, PublisherView, TagView } from '../games/views';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/game/:slug',
    element: <DetailView />
  },
  {
    path: '/games/platform/:platform',
    element: <PlatformView />
  },
  {
    path: '/games/publisher/:publisher',
    element: <PublisherView />
  },
  {
    path: '/games/tag/:tag',
    element: <TagView />
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