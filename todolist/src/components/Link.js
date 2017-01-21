import React, { PropTypes } from 'react';

const Link = ({ active, children, onClick}) => {
  if (active) {
    return <span>{children}</span>
  };

  return (
    <a href="#"
    onClick={e => {
      e.preventDevault()
      onClick()
    }}
    >
    {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: propTypes.func.isRequired
}

export default Link;
