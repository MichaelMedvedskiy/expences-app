import moment from 'moment';

const smartIncludes=(sub, mother)=>{
  return mother.toLowerCase().includes(sub.toLowerCase());
};

export default (expenses, {text,sortBy,startDate,endDate})=>{
  return expenses.filter((expense)=>{
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
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
