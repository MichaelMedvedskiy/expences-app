import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


//functions

const smartIncludes=(sub, mother)=>{
  return mother.toLowerCase().includes(sub.toLowerCase());
};

const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate})=>{
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !=='number' || expense.createdAt <= endDate;
    const textMatch=smartIncludes(text, expense.description);
    return startDateMatch && endDateMatch && textMatch;
  }).sort((first,second)=>{
    if(sortBy==='date'){
      return first.createdAt < second.createdAt ? 1:-1;
    }

    if(sortBy==='amount'){
      return first.amount < second.amount ? 1:-1;
    }
  });


};


//action generators
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

//filter actions

const setTextFilter = (text='')=>({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByDate = ()=>({
  type: 'SORT_BY_DATE'
});

const sortByAmount = ()=>({
  type: 'SORT_BY_AMOUNT'
});

const setStartDate = (startDate = undefined)=>({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate = undefined)=>({
  type: 'SET_END_DATE',
  endDate
});
//reducers
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action)=>{
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
         }
       }
       return expense;
     });

    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text:'',
  sortBy:'date',
  startDate: undefined,
  endDate:undefined
};

const filtersReducer = (state=filtersReducerDefaultState, action) =>{
  switch (action.type) {
    case 'SET_TEXT_FILTER':
     return {
       ...state,
       text:action.text
     };
    case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy:'date'
    };
   case 'SORT_BY_AMOUNT':
   return {
     ...state,
     sortBy:'amount'
   };
   case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.startDate
    };
    case 'SET_END_DATE':
     return {
       ...state,
       endDate: action.endDate
     };
    default:
      return state;
  }
};


//store declaration
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
  console.log(visibleExpenses);
});

const act1 = store.dispatch(addExpense({
  description: 'rent',
  amount: 100,
  createdAt:300
}));

const act2 = store.dispatch(addExpense({
  description: 'hentai',
  amount: 10000,
  createdAt: 600
}));

store.dispatch(editExpense(act1.expense.id, {description: 'ZZZ'}));

store.dispatch(setStartDate(0));

store.dispatch(sortByAmount());
