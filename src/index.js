import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './style.js';
import { IconfontStyle } from './statics/iconfont/iconfont';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <IconfontStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
