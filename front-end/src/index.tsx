import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.scss';
import App from 'app/App';
import reportWebVitals from './app/reportWebVitals';
import { Provider } from 'react-redux';
import store from 'app/store';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
  <BrowserRouter>
    <Provider store={store}>
      <App /> 
    </Provider>
  </BrowserRouter>
); 

reportWebVitals();
