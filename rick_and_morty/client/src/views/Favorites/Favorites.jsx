import React from 'react'
import { connect,useDispatch } from 'react-redux'
import Card from '../../components/Card/Card'
import style from './Favorites.module.css'

import { orderCards } from '../../redux/actions';
import { filterCards } from '../../redux/actions';

const Favorites = ({myFavorites}) =>{

  const dispatch=useDispatch()
      const handleDispatch = (e) => {
        const { name, value } = e.target;
        if (name === 'order') {
          dispatch(orderCards(value));
        }
        if (name === 'filter') {
          dispatch(filterCards(value));
        }
      };

  return (
    
    <div className={style.contenedorCartas}>
        <div >
        <select name='order' onChange={handleDispatch}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>
        <select name='filter' onChange={handleDispatch}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        </div>
       {myFavorites.map(({id,name,species,gender,image})=>{
          return (<Card 
          id={id}
          key={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          />)
       })}
    </div>
    )
}


const mapStateToProps = (state) =>{
  return{
    myFavorites:state.myFavorites,
  }
}


export default connect(mapStateToProps,null)(Favorites)