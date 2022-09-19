import React, {useState, useEffect} from 'react';
import { getPokemons } from '../services/api';
import Pokemon from './Pokemon';

const Vertodos = () => {
  
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [pokemons, setPokemons] = useState([]); 
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    handleApi();
  }, [url])
  
  const handleApi = async() =>{
    const data = await getPokemons(url);            
   
    setPrevious(data.previous);     
    setNext(data.next);       
    setPokemons(data.results);   
  }
  
  const handlePrev = () =>{
    if(previous!= null){
      setUrl(previous);
    }    
  }

  const handleNext = () =>{
    if(next!= null){
      setUrl(next);
    }  
  }
  
  return (
    <>
      <div className='verTodos'>
        <h1>Ver Todos</h1>
        <div className='buttonbar'>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div> 
        <div className='containerPokemon'>
          {pokemons.map((personaje, index) =>
            <Pokemon key={index} name={personaje.name} url={personaje.url} />
            )
          }
          </div>     
      </div>
    </>    
  )
}

export default Vertodos