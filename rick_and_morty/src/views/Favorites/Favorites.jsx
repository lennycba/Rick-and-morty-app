import React from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card/Card'
import style from './Favorites.module.css'

const Favorites = ({myFavorites}) =>{

  return (
    <div className={style.contenedorCartas}>
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