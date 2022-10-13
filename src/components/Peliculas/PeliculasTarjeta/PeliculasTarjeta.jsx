import React from 'react'
import "./PeliculaTarjeta.css"
const PeliculasTarjeta = (props) => {
  return (
      <div className='Tarjeta'>
          <img src={props.url} />
          <hr />
          <h2>{props.name}</h2>
          
         
      </div>
  )
}

export default PeliculasTarjeta