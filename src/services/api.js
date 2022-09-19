import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async(endpoint) =>{    
    const response = await axios.get(endpoint)    
    return response.data;
}

export const getPokemonById = async(id) => {
    const endpoint = `${baseUrl}/${id}`;
    const response = await axios.get(endpoint);
    return response.data;
}

export const getPokemonByName = async(name) => {
    const endpoint = `${baseUrl}/${name}`;
    console.log(endpoint);
    try {
        const response = await axios.get(endpoint); 
        console.log(response.status); 
        return response.data;
    } catch (error) {
        console.log("No existe el pokémon buscado "+error)
    }
}

export const getPokemonDescription = async(endpoint) => {   
    console.log("endpoint");
    console.log(endpoint);
    const response = await axios.get(endpoint);
    console.log("descripcion");
    console.log(response.data);
    return response.data;
}

