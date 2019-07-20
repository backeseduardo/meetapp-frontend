import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '~/config/ReactotronConfig';

import history from '~/services/history';
import Routes from '~/routes';

import store from '~/store';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} position="top-right" />
      </Router>
    </Provider>
  );
}

export default App;
