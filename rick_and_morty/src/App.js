import './App.css'
import Cards from './components/Cards/Cards'
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar'
import { useState } from 'react'
import { IdRepeat, NoId } from './components/Alerts/IdRepeat'
import {Routes, Route} from 'react-router-dom'
import About from './views/About/About'
import Detail from './views/Detail/Detail'
import ROUTES from './helpers/routes.helpers'


function App () {

  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
            let repetidos = characters.find((char) => char.id === data.id)
            if(repetidos === undefined){
              setCharacters((oldChars) => [...oldChars, data]);
            }else {
              IdRepeat();
              //window.alert('ID repetido, prueba con otro ID');
            }
            
          } else {
                NoId();
             //window.alert('No hay personajes con ese ID');
          }
       });
 }

 //---------------------------------------------------------------------------------------
 //......................................onClose..........................................

 function onClose (id) {
    setCharacters(characters.filter((character) => character.id !== id))
 }
  
//---------------------------------------------------------------------------------------
//......................................Random...........................................

function randomChar () {
    let randomId = Math.floor(Math.random()* 826)
    onSearch(randomId)
}

//---------------------------------------------------------------------------------------

  return (
    
    <div className={style.container}>
      <NavBar onSearch={onSearch} randomChar = {randomChar}/>
      
      <Routes>

          <Route path={ROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} />

          <Route path={ROUTES.ABOUT} element={<About />} />

          <Route path={`${ROUTES.DETAIL}/:detailId`} element={<Detail />} />

      </Routes>


    </div>
    
  )
}

export default App
