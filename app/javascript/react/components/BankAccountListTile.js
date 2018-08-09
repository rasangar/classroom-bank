import React from 'react';
import { Link } from 'react-router';

const BankAccountListTile = (props) => {
  let full_name = `${props.first_name} ${props.last_name}`
  let balance = `Balance: ${props.balance}`
  let allowance = `Allowance: ${props.allowance}`
  let email = `Email: ${props.email}`
  return(
    <div>
      <div>
        {full_name}
      </div>
      <div>
        {balance}
      </div>
      <div>
        {allowance}
      </div>
      <div>
        {email}
      </div>
      <br/>
    </div>
  )
}

export default BankAccountListTile;
