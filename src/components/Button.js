import React from 'react';

const Button = (task, name) => {
  return (
    <button onClick = {task}>{name}</button>
  )
}

export default Button;