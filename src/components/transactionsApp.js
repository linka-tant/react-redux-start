import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Navigation from 'components/navigation';


class TransactionsApp extends Component {

  render(){
    return(
      <div className="main">
        <div className="main_pages">
          <Navigation />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default TransactionsApp;
