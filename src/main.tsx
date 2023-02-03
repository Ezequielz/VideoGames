import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { router } from './router';

import { darkTheme } from './themes';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />

          <RouterProvider router={ router } />

    </ThemeProvider>
  </React.StrictMode>,
)
