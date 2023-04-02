import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({name, species, gender, image, onClose, id}) {
  
  return (
      <div className={style.contenedorCarta}>
      <div className={style.divBoton}>
        <button className={style.boton} onClick={onClose}>X</button>
      </div>
      <div className={style.imgName}>
        <img className={style.imagen} src={image} alt="tukis" />
        <Link to={`/Detail/${id}`}><h2 className={style.nombre}>{name}</h2></Link>
      </div>

      <div className={style.specGender}>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>
    </div>
  );
}


