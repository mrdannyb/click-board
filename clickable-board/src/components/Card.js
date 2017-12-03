import React from 'react';

const Card = props => {
  return (
    <div className="card-spot">
      <img alt={props.src} key={props.key} src={props.src} />
    </div>
  )
}

export default Card;
