const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';





const getCharById = (rec,res) =>{
  const {id} = rec.params;
  axios.get(URL+id)
  .then(({data})=>{
    const character = {
      id:data.id,
      name:data.name,
      gender:data.gender,
      species:data.species,
      origin:data.origin,
      image:data.image,
      status:data.status
    }

    if(!character){
      res.status(404).send('Not Found')
    }
    res.status(200).json(character);
  })
  .catch((error)=> res.status(500).json(error.message));
}






/* const axios = require("axios");

const getCharById = (res, id) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((response) => {
    const  {id, name, gender, species, origin, image, status} = response.data;
    const character =  {id, name, gender, species, origin, image, status};
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(character))
  })
  .catch((reason)=>{
    res.writeHead(500,{'Content-Type':'text/plain'});
    res.end(reason.response.message)
  });
};


 */

//module.exports = {getCharById}

module.exports = getCharById;
