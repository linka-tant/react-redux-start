import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';

import reducer from 'reducers/reducer';

import TransactionsTable from 'components/transactionsTable';
import TransactionsForm from 'components/transactionsForm';
import Navigation from 'components/navigation';


const store = createStore( reducer, applyMiddleware(thunkMiddleware) );

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div className="main">
        <Navigation />
        <Switch>
          <Route path="/add" component={ TransactionsForm } />
          <Route path="/" component={ TransactionsTable } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#app'));
