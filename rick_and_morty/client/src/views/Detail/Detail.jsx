import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ROUTES from "../../helpers/routes.helpers";
import style from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
          console.log(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.contenedor}>
      {character ? (
        <div className={style.carta}>
          <section className={style.section}>
            <h3>
              <b className={style.textos}>Status:</b>
              {character.status}
            </h3>
            <h3>
              <b className={style.textos}>Species:</b>
              {character.species}
            </h3>
            <h3>
              <b className={style.textos}>Gender:</b>
              {character.gender}
            </h3>
            <h3>
              <b className={style.textos}>Origin:</b>
              {character.origin?.name}
            </h3>
            <div>
            <Link className={style.boton} to={ROUTES.HOME}>
              Back to home
            </Link>
            </div>
          </section>
          <div className={style.principal}>
            <img className={style.imagen} src={character.image} alt={character.name} />
            <h2>
              <b className={style.textos}>Name: </b>
              {character.name}
            </h2>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default Detail;
