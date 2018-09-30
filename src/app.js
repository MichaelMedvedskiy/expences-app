import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore.js';
import {addExpense, deleteExpense,editExpense}  from './actions/expenses.js';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();



const jsx = (
  <div>
    <Provider store = {store}>
      <AppRouter />

    </Provider>
  </div>
  );

ReactDOM.render(jsx, document.getElementById('container'));
