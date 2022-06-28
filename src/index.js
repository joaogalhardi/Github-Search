import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalProvider} from './contexts/GlobalProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
);
