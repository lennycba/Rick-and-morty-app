import "./App.css";
import Cards from "./components/Cards/Cards";
import style from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { IdRepeat, NoId } from "./components/Alerts/IdRepeat";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import ROUTES from "./helpers/routes.helpers";
import Form from "./components/Form/Form";
import Favorites from "./views/Favorites/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
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
  const EMAIL = "lenny@gmail.com";
  const PASSWORD = "Alenny123";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate(ROUTES.HOME);
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
