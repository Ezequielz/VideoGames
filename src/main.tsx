import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


import { darkTheme } from './themes';
import './index.css'
import { App } from './App';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <QueryClientProvider client={ client }>
            <ReactQueryDevtools />
              <App />
          </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
