
import { FC } from 'react';
import { GamesLayout } from './components/Layouts';
import { RouterProvider } from 'react-router';
import { router } from './router';

export const App: FC = () => {
  
  return (
  
        <RouterProvider router={ router } />
  
  )
}