import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from  'numeral';
const ExpensesTotal = ({count, total})=>(
  <div>
    Count of expenses: {count} - How much money they cost: {numeral(total).format('$0,0.00')}
  </div>
);


const mapStateToProps = (state)=>{
  let {count, total} = selectExpensesTotal(selectExpenses( state.expenses, state.filters));
  return ({
    count,
    total
  });
};



export default connect(mapStateToProps)(ExpensesTotal);
