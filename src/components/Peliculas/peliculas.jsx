import React from 'react'
import PeliculasTarjeta from './PeliculasTarjeta/PeliculasTarjeta'
import "./peliculas.css"

const peliculasInfo =[
  {
    id: "1",
    name: "viernes 14",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg"
  },
  {
    id: "2",
    name: "viernes 14",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg"
  },
  {
    id: "3",
    name: "viernes 15",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg"
  },
  {
    id: "4",
    name: "viernes 13",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg"
  },
  {
    id: "5",
    name: "viernes 13",
    urlImagen:"https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg"
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