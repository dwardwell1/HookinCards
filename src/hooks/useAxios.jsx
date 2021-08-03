import {  useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useAxios = (url,paramater=null) => {
    const [cards, setCards] = useState([]);
    
    const addCard = async () => {
   
    const response = axios.get(`${url}${paramater}`)
     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard];
  
}


export default useAxios;

// const addPokemon = async name => {
//     const response = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${name}/`
//     );
//     setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);
//   };