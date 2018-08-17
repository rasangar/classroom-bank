import React from 'react';
import { Link } from 'react-router';

const ProfileTile = (props) => {

  let name = `${props.first_name} ${props.last_name}`
  let css = `hidden`
  let balance
  let allowance
  let button

  if(props.balance && props.allowance){
    css = `show`
    balance = Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD',minimumFractionDigits:2,maximumFractionDigits:2}).format(props.balance)
    allowance = Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD',minimumFractionDigits:2,maximumFractionDigits:2}).format(props.allowance)
    button = <div><a href='/transactions/new' className='button-med button-font-lrg button'>Make a Transaction</a></div>
  }

  return(
    <div className="text-center">
      <h3>
        {name}
      </h3>
      <h4>
        Email: {props.email}
      </h4>
      <h4 className={css}>
        {`Balance: `}{balance}
      </h4>
      <h4 className={css}>
        {`Allowance: `}{allowance}
      </h4>
      <div>
        {button}
      </div>
    </div>
  )
}

export default ProfileTile;
