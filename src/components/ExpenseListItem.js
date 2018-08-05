import React from 'react';
import {connect} from 'react-redux';
import {Link}from 'react-router-dom';

const ExpenseListItem = ({ id, desciption, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{desciption}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;