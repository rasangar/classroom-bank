import React from 'react';
import { Link } from 'react-router';

const ProfileTile = (props) => {

  let name = `${props.first_name} ${props.last_name}`
  let balance
  let allowance

  if(props.balance && props.allowance){
    balance = `Balance: ${props.balance}`
    allowance = `Allowance: ${props.allowance}`
  }

  return(
    <div>
      <div>
        {name}
      </div>
      <div>
        Email: {props.email}
      </div>
      <div>
        {balance}
      </div>
      <div>
        {allowance}
      </div>
    </div>
  )
}

export default ProfileTile;