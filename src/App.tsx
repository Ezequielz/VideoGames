
import { FC, useContext } from 'react';

import { RouterProvider } from 'react-router';
import { router } from './router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import { darkTheme, lightTheme } from './themes';
import { UiContext } from './context/ui';

export const App: FC = () => {
  const { theme } = useContext(UiContext);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme }>
      <CssBaseline />
        <RouterProvider router={ router } />
    </ThemeProvider>
  
  )
}