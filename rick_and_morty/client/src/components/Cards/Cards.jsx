import Card from '../Card/Card'
import style from './Cards.module.css'


export default function Cards({characters, onClose}) {

   return (
   <div className={style.contenedorCartas}>
      {characters.map(({id,name,species,origin, status,gender,image})=>{
         return <Card 
         id={id}
         key={id}
         name={name}
         origin={origin}
         status={status}
         species={species}
         gender={gender}
         image={image}
         onClose = {()=>onClose(id)}
         />
      })}
   </div>
   )
}
