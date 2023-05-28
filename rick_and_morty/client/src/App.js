import "./App.css";
import Cards from "./components/Cards/Cards";
import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { IdRepeat, NoId,NoUser } from "./components/Alerts/IdRepeat";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import ROUTES from "./helpers/routes.helpers";
import Register from "./components/Form/Register";
import Form from "./components/Form/Form";
import Favorites from "./views/Favorites/Favorites";
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let repetidos = characters.find((char) => char.id === data.id);
          if (repetidos === undefined) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
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

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  //---------------------------------------------------------------------------------------
  //......................................Random...........................................

  function randomChar() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  //---------------------------------------------------------------------------------------

  const location = useLocation();

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);


  async function login (userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      await axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate(ROUTES.HOME);
      });
    } catch (error) {
      NoUser();
    }
 }

 const register = async (newUserData) => {
    const {email,password} = newUserData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const {data} = await axios.post(URL,{email,password})
      if(data.message === 'este email ya existe') window.alert('usuario ya existente')
      if(data.message === 'usuario creado correctamente') {
        window.alert('registro existoso')
        navigate(ROUTES.LOGIN);
    }

    } catch (error) {
      throw Error(error.message);
    }

 }

//---------------------------------------------------------------------------------------

const logOut = () =>{
  setAccess(false)
}

//---------------------------------------------------------------------------------------


  useEffect(() => {
    !access && navigate(ROUTES.LOGIN);
  }, [access]);

  //---------------------------------------------------------------------------------------

  return (
    <div className={style.container}>
      {location.pathname !== "/" && (
        <NavBar onSearch={onSearch} randomChar={randomChar} logOut={logOut} />
      )}

      <Routes>
        <Route exact path={ROUTES.LOGIN} element={<Form login={login} />} />

        <Route exact path={ROUTES.REGISTER} element={<Register register={register} />} />

        <Route
          path={ROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path={ROUTES.ABOUT} element={<About />} />

        <Route path={`${ROUTES.DETAIL}/:detailId`} element={<Detail />} />

        <Route path={ROUTES.FAVORITES} element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
