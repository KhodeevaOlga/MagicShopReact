import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ProductsContextProvider from './components/Context/ProductsContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductsContextProvider>
    <App />
    </ProductsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
