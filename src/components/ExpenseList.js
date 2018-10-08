import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

import {connect} from 'react-redux';
const ExpenseList = (props)=>(
  <div>
    <h1>ExpenseList</h1>
    <ol>
    {props.expenses.map((expense)=>(
      <ExpenseListItem key = {expense.id} {...expense}/>
    ))}
    </ol>
  </div>
);

const mapStateToProps = (state)=>({
      expenses: selectExpenses( state.expenses, state.filters),
    });

const motherComponentCreator = connect(mapStateToProps);
export default motherComponentCreator(ExpenseList);
