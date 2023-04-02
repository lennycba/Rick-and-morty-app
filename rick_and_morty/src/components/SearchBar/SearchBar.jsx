import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({onSearch,randomChar}) {

   const [character,setCharacter] = useState(0)

   const handleSearch = (event) =>{
      let {value} = event.target;
      setCharacter(value)
   }

   return (
      <div className={style.divContenedor}>
         <div className={style.contenedorInput}><input className={style.input} type='search' onChange={handleSearch}/></div>
         <div className={style.contenedorBoton}><button className={style.boton} onClick={() => onSearch(character)}>Agregar</button></div>
         <div className={style.contenedorBotonRandom}><button className={style.botonRandom} onClick={() => randomChar()}>Random</button></div>
      </div>
   );
}
