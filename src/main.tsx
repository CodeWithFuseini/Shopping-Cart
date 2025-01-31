import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { store } from './store/store.tsx';
import { Provider } from 'react-redux';

import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter } from 'react-router-dom';




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
