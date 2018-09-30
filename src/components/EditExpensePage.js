import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';

import {editExpense, deleteExpense} from '../actions/expenses';

const EditExpensePage = (props)=> {
  console.log(props);
  return (

  <div>
    <ExpenseForm
      expense = {props.expense}
      onSubmit={(expense)=>{
        //console.log(expense);
        props.dispatch(editExpense(props.match.params.id,expense));
        props.history.push('/');
      }} />
    <button onClick = {
      ()=>{
        props.dispatch(deleteExpense({id:props.match.params.id}));
        props.history.push('/');
      }
      }>remove</button>
  </div>
)};

const mapStateToProps = (state, props)=>{
  return {
    expense: state.expenses.find((expense)=>{
      return expense.id ===props.match.params.id;
    })
  };
};

export default  connect(mapStateToProps )(EditExpensePage);
