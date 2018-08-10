import React from 'react';
import { Link } from 'react-router';

const ClassbankListTile = (props) => {

  return(
    <div>
      <div className='index-classbank-link'>
        <Link to={`/classbanks/${props.id}`}>{props.name}</Link>
      </div>
    </div>
  )
}

export default ClassbankListTile;
