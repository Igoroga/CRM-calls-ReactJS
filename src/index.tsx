import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import {App} from './App';
import { GlobalStyles } from './globalStyle';
import { Provider } from 'react-redux'
import { store } from './store/store';
import './forStyle/fonts/SFProDisplay-Medium.woff2'
import './forStyle/fonts/SFProDisplay-Regular.woff2'
import './index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </BrowserRouter>
);

