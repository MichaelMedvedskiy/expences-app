import React from 'react';
import {Link} from 'react-router-dom';


const ExpenseListItem = ({ description, amount, createdAt, id } )=>(
  <li>

    <Link to={`/edit/${id}`} >
      <p>{description}</p>
    </Link>
    <p>{amount}</p>
    <p>{createdAt}</p>
  </li>
);




export default ExpenseListItem;
