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

store.subscribe(()=>{
  console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));
});

store.dispatch(addExpense({description: 'horse cum', amount: 112340000, createdAt: 228}));

store.dispatch(addExpense({description: 'ice wallow come', amount: 22310000, createdAt: 420}));

store.dispatch(addExpense({description: 'fisting', amount: 300000, createdAt: -15}));
store.dispatch(sortByAmount());
//store.dispatch(setTextFilter('cum'));


const jsx = (
  <div>
    <Provider store = {store}>
      <AppRouter />

    </Provider>
  </div>
  );

ReactDOM.render(jsx, document.getElementById('container'));
