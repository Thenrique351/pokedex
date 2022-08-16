
import React, { useState, useEffect } from 'react';
import pokemonByName from "../helpers/fetchAPI";
function Pokemon() {
   // {pokemonByName('Charmander')}

   const[pokemon, setPokemon] = useState([]);
   
   async function fetchTeste(pokemon){
        const pokeData = await pokemonByName(pokemon);
        setPokemon(pokeData);
   }
   useEffect(() => {
    fetchTeste('abra');
}, []);


    return (
     <h1> {pokemon.name}</h1>
    );
  }

  export default Pokemon