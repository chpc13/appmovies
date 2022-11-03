import React from 'react'
import "./PeliculaTarjeta.css"
const PeliculasTarjeta = (props) => {
  return (
      <div className='Tarjeta'>
          <img src={props.url} />
      <h2>{props.name}</h2>
      <p>DESCRIPCION</p>
         
      </div>
  )
}

export default PeliculasTarjeta