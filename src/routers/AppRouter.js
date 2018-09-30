import React from 'react';
import {Switch,BrowserRouter, Route} from 'react-router-dom';

import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import GetHelpPage from '../components/GetHelpPage';
import NotFoundPage from '../components/NotFoundPage';








const AppRouter = ()=>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact = {true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={GetHelpPage} />
        <Route  component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>);

export default AppRouter;
