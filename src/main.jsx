import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreContextProvider from './context/storeContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreContextProvider>
);
