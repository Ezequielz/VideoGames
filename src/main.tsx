import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router';
import { router } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


import { darkTheme } from './themes';
import './index.css'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <QueryClientProvider client={ client }>
            <ReactQueryDevtools />
            <RouterProvider router={ router } />

          </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
