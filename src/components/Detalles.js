import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonById } from '../services/api';
import { getPokemonDescription } from '../services/api';

const Detalles = () => {

    const [pokemonDetails, setPokemonDetails] = useState({});
    const [name, setName] = useState("");
    const [imgPokemon, setImgPokemon] = useState("");
    const [imgFrontPokemon, setImgFrontPokemon] = useState("");
    const [imgShinyPokemon, setImgShinyPokemon] = useState("");
    const [descriptionUrl, setDescriptionUrl] = useState("");
    const [description, setDescription] = useState("");
    const [flagBack, setFlagBack] = useState(false);

    const {id} = useParams(); //objeto

    useEffect( () => {
        obtenerData(id);
        //To Do: Obtener la descripción del pokemon
        //obtenerDescription(descriptionUrl);
      }, [id])
    
    const obtenerData = async (id) =>{
        const pokeInfo = await  getPokemonById(id);
        setPokemonDetails(pokeInfo); 
        setName(pokeInfo.name)  
        setImgPokemon(pokeInfo.sprites.other.home.front_default); 
        setImgFrontPokemon(pokeInfo.sprites.other.home.front_default);  
        setImgShinyPokemon(pokeInfo.sprites.other.home.front_shiny);
        setDescriptionUrl(pokeInfo.species.url);
    }

    const obtenerDescription = async(url) =>{
      const descriptionInfo = await getPokemonDescription(url);
      console.log("texto descripcion");
      console.log(descriptionInfo.flavor_text_entries[0].flavor_text);
      // setDescription(descriptionInfo.flavor_text_entries[0].flavor_text);
    }


    const handlePerspective = () =>{
      if(!flagBack){
        setImgPokemon(imgShinyPokemon);
      }else{
        setImgPokemon(imgFrontPokemon);
      }
      setFlagBack(!flagBack);    
    } 

  return (
    <>  
        {console.log(pokemonDetails)}            
        <div class="card pokemonDetail" width = "10rem">
            <img class="redimension card-img-top" src={imgPokemon}  alt={name} width="80"/>
            <div class="card-body bodyPokemonDetail">
                <h3 class="card-title">{name.toUpperCase()}</h3>
                <h4>Id Pokemon = {id}</h4>                
                <button class="btn btn-primary" onClick={handlePerspective}>{flagBack ? "Front" : "Shiny"}</button>      
            </div>
        </div>
    </>    
  )
}

export default Detalles