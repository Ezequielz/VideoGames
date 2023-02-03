
import { FC } from 'react';
import { GamesLayout } from './components/Layouts';
import { Home } from './components/views';


export const App: FC = () => {
  
  return (
    <GamesLayout>
        <Home />
    </GamesLayout>
  )
}