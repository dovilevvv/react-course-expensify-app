import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, desciption, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{desciption}</h3>
        </Link>
        <p>
        {numeral(amount / 100).format('$0,0.00')}
         - 
         {moment(createdAt).format('MMMM Do, YYYY')}
         </p>
    </div>
);

export default ExpenseListItem;