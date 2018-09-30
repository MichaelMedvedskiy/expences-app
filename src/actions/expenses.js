import uuid from 'uuid';


const addExpense = (
{
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
)=>({
  type: 'ADD_EXPENSE',
  expense:{
      id: uuid(),
      description,
      note,
      amount,
      createdAt
  }
});

const deleteExpense = ({id})=>({
  type: 'DELETE_EXPENSE',
  id
});

const editExpense = (id, changes)=>({
  type:'EDIT_EXPENSE',
  id,
  changes
});

export {addExpense, deleteExpense,editExpense};
