import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import reducer from 'reducers/reducer';

import TransactionsApp from 'components/transactionsApp';
import TransactionsTable from 'components/transactionsTable';
import TransactionsForm from 'components/transactionsForm';


const store = createStore( reducer, applyMiddleware(thunkMiddleware) );

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <TransactionsApp>
        <Switch>
          <Route path="/" exact component={ TransactionsTable } />
          <Route path="/add" component={ TransactionsForm } />
        </Switch>
      </TransactionsApp>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'));
