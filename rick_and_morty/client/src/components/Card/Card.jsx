import style from "./Card.module.css";
import { Link,useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState } from "react";
import {connect} from 'react-redux';
import { useEffect} from "react";


const Card = ({
  name,
  species,
  gender,
  origin,
  status,
  image,
  onClose,
  id,
  removeFav,
  addFav,
  myFavorites,
}) => {

  const location = useLocation();

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, species, gender, origin, status, image, onClose, id });
    }
  };
//----------------------------------------------
   useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
//-------------------------------------------------

  return (
    <div className={style.contenedorCarta}>
      <div className={style.divBoton}>
        {isFav ? (
          <button className={style.fav} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={style.fav} onClick={handleFavorite}>🤍</button>
        )}
        {location.pathname === '/home' ? 
        <button className={style.boton} onClick={onClose}>
          X
        </button> : null}
        
      </div>
      <div className={style.imgName}>
        <img className={style.imagen} src={image} alt="tukis" />
        <Link to={`/Detail/${id}`}>
          <h2 className={style.nombre}>{name}</h2>
        </Link>
      </div>

      <div className={style.specGender}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (char) => {
      dispatch(addFav(char));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

//----------------------------------------------
const mapStateToProps = (state) =>{
  return{
    myFavorites:state.myFavorites,
  }
}
//-----------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(Card);
