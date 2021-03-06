import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = ()=>(
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName = "is-active" exact = {true}>HomePage </NavLink>
    <NavLink to="/create" activeClassName = "is-active" exact = {true}>CreatePage</NavLink>
    <NavLink to="/help" activeClassName = "is-active" exact = {true}>HelpPage </NavLink>

  </header>
);

export default Header;
