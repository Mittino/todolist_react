import React, { PropTypes } from 'react';

const Todo = ({ onClick, competed, text}) => (
  <li
    onClick = {onClick}
    style = {{
      textDecoration: completed ? 'line-through': 'none'
    }}
    >
      {text}
    </li>
)

Tpdp.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
