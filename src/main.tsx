import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import CounterSignPortal from './portal/App';
import './style.css';
const isPortal = window.location.pathname.includes('/portal');
createRoot(document.getElementById('root')!).render(<React.StrictMode>{isPortal ? <CounterSignPortal/> : <App/>}</React.StrictMode>);