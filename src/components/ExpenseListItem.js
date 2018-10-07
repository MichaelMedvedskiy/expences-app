import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from  'numeral';
const ExpenseListItem = ({ description, amount, createdAt, id } )=>(
  <li>

    <Link to={`/edit/${id}`} >
      <p>{description}</p>
    </Link>
    <p>{numeral(amount).format('$0,0.00')}</p>
    <p>{moment(createdAt).format('MMMM : Do : YYYY')}</p>
  </li>
);




export default ExpenseListItem;
