import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'antd/dist/antd.less';
import App from './App';
import './styles/index.scss';
import store from './store/storeConfig';

const root = createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
