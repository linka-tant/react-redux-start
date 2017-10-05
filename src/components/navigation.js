import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

  render(){
    return(
      <header className="header">
        <nav className="header_nav">
          <NavLink to='/add' className="header_nav-link">Add transaction</NavLink>
          <NavLink exact to='/' className="header_nav-link">List of transactions</NavLink>
        </nav>
        <p className="header_logout">Log out</p>
      </header>
    )
  }
}

export default Navigation;
