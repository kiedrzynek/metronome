import React from 'react';

const Input = (props) => {
  const handleChange = e => {
    props.onChange(e.target.value);
  }


    return (
    <input type="number" placeholder={props.placeholder} onChange={handleChange} />
    )
  }

  export default Input;