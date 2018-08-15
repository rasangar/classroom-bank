import React from 'react';
import { Link } from 'react-router';

const ClassbankListTile = (props) => {

  return(
    <div>
      <Link to={`/classbanks/${props.id}`}>
        <div className='index-classbank-link'>
          {props.name}
        </div>
      </Link>
    </div>
  )
}

export default ClassbankListTile;
