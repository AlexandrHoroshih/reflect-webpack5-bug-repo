import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { history } from '@lib/routing';

import { App } from './app';

const root = document.querySelector('#root');

const render = () => {
  if (root) {
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      root,
    );
  }
};

if (module.hot) {
  module.hot.accept('./app', render);
}

render();
