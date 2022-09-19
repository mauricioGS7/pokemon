import React from 'react';
import masterPokemon from '../images/MasterPokemon.png'

const Info= () => {
  return (
    <div className='container'>
      <div className='pokemon'>
        <h1>Info</h1>
        <h2>Bienvenido a la PokéApi</h2>
        <p>"Conviertete en un Maestro Pokémon"</p>
        <img src={masterPokemon} alt="masterPokemon"/>
      </div>      
    </div>    
  )
}

export default Info