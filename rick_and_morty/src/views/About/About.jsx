import React from 'react'
import style from './About.module.css'
import imagen from '../../imagenes/lenny.png'


const About = () => {
  return (
    <div className={style.contenedor}>
      <h1>Bienvenidos a la base de datos de Rick and Morty</h1>
      <div className={style.contenedorImagen}>
      <img className={style.imagen} src={imagen} alt='lenny'/>
      <div className={style.nombre}>
      <h3>Imagen 100% real no fake del creador</h3>
      </div>
      </div>
        <p>Esta Single page aplication está siendo creada como proyecto de integración para el bootcamp de Soy Henry</p>
    </div>
  )
}

export default About