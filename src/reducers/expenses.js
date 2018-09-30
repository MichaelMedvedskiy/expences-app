

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action)=>{
  switch (action.type) {
    case 'ADD_EXPENSE':
     return  [...state, action.expense];

    case 'DELETE_EXPENSE':
     return state.filter( expense => expense.id!=action.id);

    case 'EDIT_EXPENSE':
     return state.map((expense)=>{
       if(expense.id===action.id){
         expense = {
           ...expense,
           ...action.changes

         };
       }
       return expense;
     });

    default:
      return state;
  }
};
