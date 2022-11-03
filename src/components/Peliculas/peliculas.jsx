import React from 'react'
import PeliculasTarjeta from './PeliculasTarjeta/PeliculasTarjeta'
import "./peliculas.css"

const peliculasInfo =[
  {
    id: "1",
    name: "Jeepers Creepers",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/g410Y1U1ELbmJG14Zru3UAimm1G.jpg"
  },
  {
    id: "2",
    name: "Blackout",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/xDgnmbdWS59NtTPdzujdZGuPUPZ.jpg"
  },
  {
    id: "3",
    name: "Grimcutty",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/qvg75YJMfbHeDNirUrrgBMQImRn.jpg"
  },
  {
    id: "4",
    name: "The Good Doctor",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg"
  },
  {
    id: "5",
    name: "Chainsaw Man",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/vV5UL98vkvMy6ygFLl4lw6vaAs2.jpg"
  }]

const peliculas = () =>{
  return (
      <div className='contenedor-peliculas' >
      {
        peliculasInfo.map(peliculas => (
          <PeliculasTarjeta url={peliculas.urlImagen} name={peliculas.name} />
        ))
          }
      </div>
      
  )
}

export default peliculas