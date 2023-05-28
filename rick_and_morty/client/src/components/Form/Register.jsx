import style from "./Form.module.css";
import React from "react";
import Validation from "./Validation";
import { Link } from "react-router-dom";
import ROUTES from "../../helpers/routes.helpers";

export default function Register(props) {
  const [newUserData, setNewUserData] = React.useState({
    email: "",
    password: "",
    passwordValidate:""
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
    passwordValidate:""
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setNewUserData({ ...newUserData, [property]: value });
    setErrors(Validation({ ...newUserData, [property]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.register(newUserData);
    setNewUserData({
      email: "",
      password: "",
      passwordValidate:""
    })
  };

  const resetInput = () =>{
    setNewUserData({
      email: "",
      password: "",
      passwordValidate:""
    })
  }

  return (
    <div className={style.contenedor}>
      <div className={style.formulario}>
        <form onSubmit={handleSubmit}>
          <div className={style.campos}>
            <label htmlFor="">Email: </label>
            <input
              name="email"
              type="text"
              placeholder="ingrese su nombre de usuario"
              value={newUserData.email}
              onChange={handleInputChange}
              className={errors.email && style.warning}
            />
            {errors.email ? (
              <p className={style.danger}>{errors.email}</p>
            ) : null}

            <label htmlFor="">Password: </label>
            <input
              name="password"
              type="password"
              placeholder="ingrese su password"
              value={newUserData.password}
              onChange={handleInputChange}
              className={errors.password && style.warning}
            />
            {errors.password ? (
              <p className={style.danger}>{errors.password}</p>
            ) : null}
            <label htmlFor="">Password: </label>
            <input
              name="passwordValidate"
              type="password"
              placeholder="repita su contraseña"
              value={newUserData.passwordValidate}
              onChange={handleInputChange}
              className={errors.passwordValidate && style.warning}
            />
            {errors.passwordValidate ? (
              <p className={style.danger}>{errors.passwordValidate}</p>
            ) : null}
          </div>
          <button className={style.boton}>REGISTER</button>
          <p onClick={resetInput}  >ya tienes una cuenta?<Link to={ROUTES.LOGIN}>Ingresa aquí</Link></p>
        </form>
      </div>
    </div>
  );
}
