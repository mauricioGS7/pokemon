import React, {useState, useEffect} from 'react';
import { getPokemonByName } from '../services/api';

const Buscar = () => {

  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState([]); 

  const [name, setName] = useState("");
  const [imgPokemon, setImgPokemon] = useState("");
  const [imgFrontPokemon, setImgFrontPokemon] = useState("");
  const [imgDreamPokemon, setImgDreamPokemon] = useState("");  
  const [flagSearch, setFlagSearch] = useState(false);
  const [flagImg, setFlagImg] = useState(false);
  

  const handleApi = async(name) =>{
    console.log("estoy recibiendo el handleApi name = "+name);
    const data = await getPokemonByName(name.toLowerCase());   
    console.log("data");         
    console.log(data);

    if(data != undefined){
      setPokemon(data);
      setName(data.name)  
      setImgPokemon(data.sprites.other.home.front_default); 
      setImgFrontPokemon(data.sprites.other.home.front_default);  
      setImgDreamPokemon(data.sprites.other.dream_world.front_default);      
      setFlagSearch(true);
    }else{
      setFlagSearch(false)
    }
    
  }

  const handleInputChange = () =>{    
    const input = document.getElementById('searchInput');
    console.log(input.value);
    setSearch(input.value);    
  }

  const handleImg = () =>{
    if(!flagImg){
      setImgPokemon(imgDreamPokemon);
    }else{
      setImgPokemon(imgFrontPokemon);
    }
    setFlagImg(!flagImg);  
  }

  useEffect(() => {
    console.log("Ha cambiado la búsqueda con " + search)
    handleApi(search);
  }, [search])
  

  return (
    <>
      <div className='container '>
        <div className='pokemon'>
          <h1>Buscar</h1>        
          <input type='text' id='searchInput' className='form-control' placeholder='Buscar Pokémon'/>        
          <button type='submit' className='btn btn-primary' onClick={handleInputChange}>Buscar</button>   
        </div>     
      </div>
      {flagSearch ?
      <div class="card pokemonDetail" width = "10rem">
        <img class="redimension card-img-top" src={imgPokemon}  alt={name} width="80"/>
        <div class="card-body bodyPokemonDetail">
            <h3 class="card-title">{name.toUpperCase()}</h3>                          
            <button class="btn btn-primary" onClick={handleImg} >{flagImg ? "Home" : "Dream"}</button>    
        </div>  
      </div>
      :     
      <div></div>
      }      
    </>    
   
  )
}

export default Buscar