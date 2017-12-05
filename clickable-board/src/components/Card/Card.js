import React from 'react';
import './Card.css';

const Card = props => {
  return (
    <div className="card-spot" key={props.id}>
      <img className="card-img" alt={props.src} key={props.id} src={props.src} onClick={props.onClick} />
    </div>
  )
}

export default Card;
