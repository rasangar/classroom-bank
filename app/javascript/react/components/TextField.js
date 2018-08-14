import React from 'react';

const TextField = props => {
  return (
    <label className="field">
      {props.label}
      <input
        name={props.name}
        type='text'
        value={props.value}
        onChange={props.handlerFunction}
      />
    </label>
  );
};

export default TextField;
