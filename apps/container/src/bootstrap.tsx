import { configureStore } from '@reduxjs/toolkit';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

export const store = configureStore({
  reducer: {},
});

const element = document.getElementById('root');

if (!element) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(element);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
