import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './route/index.tsx'
import reportWebVitals from './reportWebVitals.ts';

import './index.scss'

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
);

reportWebVitals();