import React from 'react';

function Show(props) {
  return (
    <div>
      <h1>{props.show.title}</h1>
      <p>{props.show.genre}</p>
      <img src={props.show.img} alt=""/>
    </div>
  )
}

export default Show