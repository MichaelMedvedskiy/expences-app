
export default (expenses =[])=>{

  //console.log(expenses, expenses[0].amount);
  // for(let i =0;i<expenses.length;i++){
  //   ret +=expenses[i].amount;
  // }
let ret = expenses.reduce((sum,expense)=>{
  return sum+expense.amount;
},0);
// console.log('The ret: ',ret);




  return {
    total:ret,
    count:expenses.length
  };
};
