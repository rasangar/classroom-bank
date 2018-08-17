import React from 'react';
import { Link } from 'react-router';

const BankAccountListTile = (props) => {
  let full_name = `${props.first_name} ${props.last_name}`
  let allowance = `Allowance: ${props.allowance}`
  let email = `Email: ${props.email}`
  return(
    <div>
      <div>
        {full_name}
      </div>
      <div>
        {'Balance: '}{new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }).format(props.balance)}
      </div>
      <div>
      {'Allowance: '}{new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(props.allowance)}
      </div>
      <div>
        {email}
      </div>
      <br/>
    </div>
  )
}

export default BankAccountListTile;
