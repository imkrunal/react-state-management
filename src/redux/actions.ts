import * as actionTypes from "./types";
import { Pokedex } from "pokeapi-js-wrapper";

export const getAllPokemons = () => (dispatch: any) => {
  dispatch({ type: actionTypes.GET_ALL_POKEMONS_PENDING });
  const pokeApi = new Pokedex();
  pokeApi
    .getPokemonsList({ offset: 0, limit: 10, cacheImages: true })
    .then(({ results }: any) => {
      return results.map((result: any) =>
        result.url.replace("https://pokeapi.co", "")
      );
    })
    .then(async (res: any) => {
      return await pokeApi.resource(res);
    })
    .then((res: any) => {
      // To Set the error
      // throw "Error Occured";
      dispatch({ type: actionTypes.GET_ALL_POKEMONS_SUCCESS, payload: res });
    })
    .catch((err: any) => {
      dispatch({ type: actionTypes.GET_ALL_POKEMONS_FAILURE, error: err });
    });
};

export const getPokemon = (name: string) => (dispatch: any) => {
  dispatch({ type: actionTypes.GET_GET_POKEMON_PENDING });
  const pokeApi = new Pokedex();
  pokeApi
    .getPokemonByName(name)
    .then((res: any) => {
      // To throw error
      // throw "Not Found";
      dispatch({ type: actionTypes.GET_GET_POKEMON_SUCCESS, payload: res });
    })
    .catch((err: any) => {
      dispatch({ type: actionTypes.GET_GET_POKEMON_FAILURE, error: err });
    });
};
