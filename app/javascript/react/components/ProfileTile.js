import React from 'react';
import { Link } from 'react-router';

const ProfileTile = (props) => {

  let name = `${props.first_name} ${props.last_name}`
  let balance
  let allowance
  let button

  if(props.balance && props.allowance){
    balance = `Balance: ${props.balance}`
    allowance = `Allowance: ${props.allowance}`
    button = <div><a href='/transactions/new' className='button'>Transaction</a></div>

  }

  return(
    <div>
      <h3>
        {name}
      </h3>
      <h4>
        Email: {props.email}
      </h4>
      <h4>
        {balance}
      </h4>
      <h4>
        {allowance}
      </h4>
      {button}
    </div>
  )
}

export default ProfileTile;
