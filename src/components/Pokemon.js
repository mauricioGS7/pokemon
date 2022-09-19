import React, {useState, useEffect} from 'react';
import { getPokemons } from '../services/api';
import { Link } from 'react-router-dom';

const Pokemon = ({name, url}) => {

  const [pokeinfo, setPokeinfo] = useState();
  const [imgPokemon, setImgPokemon] = useState("");
  const [imgFront, setImgFront] = useState("");
  const [imgBack, setImgBack] = useState("");
  const [flagBack, setFlagBack] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    obtenerData(url);
    
  }, [ url])
  
  const obtenerData = async (url) =>{
    const pokeInfo = await getPokemons(url);
   
    setPokeinfo(pokeInfo);    
    setId(pokeInfo.id)
    setImgPokemon(pokeInfo.sprites.front_default);
    setImgFront(pokeInfo.sprites.front_default);
    setImgBack(pokeInfo.sprites.back_default);
  }

  const handlePerspective = () =>{
    if(!flagBack){
      setImgPokemon(imgBack);
    }else{
      setImgPokemon(imgFront);
    }
    setFlagBack(!flagBack);    
  } 
 
  return (
    <div className='card_pokemon'>          
        <img src={imgPokemon} alt={name}/>        
        <h3>{name}</h3>  
        <div>
            <button class="buttonDetail" onClick={handlePerspective}>{flagBack ? "Front" : "Back"}</button>            
            <Link className='linkDetail' to={`detalles/${id}`}>Detail</Link>            
        </div>         
    </div>
  )
}

export default Pokemon