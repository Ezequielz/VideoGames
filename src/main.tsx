import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";



import './index.css'
import { App } from './App';
import { FiltersProvider } from './context/filters';
import { UiProvider } from './context/ui';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UiProvider>
      <FiltersProvider>
      
            
              <QueryClientProvider client={ client }>
                <ReactQueryDevtools />
                  <App />
              </QueryClientProvider>
    
      </FiltersProvider>
    </UiProvider>
  </React.StrictMode>,
)
