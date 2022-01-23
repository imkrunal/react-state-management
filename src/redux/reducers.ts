import { combineReducers } from "redux";
import * as actionTypes from "./types";

const initialState = {
  allPokemons: { loading: false, pokemons: null, error: null },
  getPokemon: { loading: false, pokemon: null, error: null },
};

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POKEMONS_PENDING:
      return {
        ...state,
        allPokemons: {
          ...state.allPokemons,
          loading: true,
        },
      };
    case actionTypes.GET_ALL_POKEMONS_SUCCESS:
      return {
        ...state,
        allPokemons: {
          ...state.allPokemons,
          loading: false,
          pokemons: action.payload,
          error: null,
        },
      };
    case actionTypes.GET_ALL_POKEMONS_FAILURE:
      return {
        ...state,
        allPokemons: {
          ...state.allPokemons,
          loading: false,
          error: action.error,
        },
      };
    case actionTypes.GET_GET_POKEMON_PENDING:
      return {
        ...state,
        getPokemon: {
          ...state.getPokemon,
          loading: true,
        },
      };
    case actionTypes.GET_GET_POKEMON_SUCCESS:
      return {
        ...state,
        getPokemon: {
          ...state.getPokemon,
          loading: false,
          pokemon: action.payload,
          error: null,
        },
      };
    case actionTypes.GET_GET_POKEMON_FAILURE:
      return {
        ...state,
        getPokemon: {
          ...state.getPokemon,
          loading: false,
          error: action.error,
        },
      };
    default:
      return { ...state };
  }
};

const reducers = combineReducers({
  pokemon: pokemonReducer,
});

export default reducers;
