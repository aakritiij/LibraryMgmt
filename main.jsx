import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import LibraryManagement from './LibraryManagement.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <LibraryManagement />
  </StrictMode>
);
