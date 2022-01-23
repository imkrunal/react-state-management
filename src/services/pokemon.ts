import { Pokedex } from "pokeapi-js-wrapper";

export const getAllPokemons = async (
  setLoading: Function,
  setPokemons: Function,
  setError: Function
) => {
  setLoading(true);
  const pokeApi = new Pokedex();
  await pokeApi
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
      setLoading(false);
      setPokemons(res);
      setError(null);
    })
    .catch((err: any) => {
      setLoading(false);
      setError(err);
    });
};

export const getPokemon = async (
  name: string,
  setLoading: Function,
  setPokemon: Function,
  setError: Function
) => {
  setLoading(true);
  const pokeApi = new Pokedex();
  await pokeApi
    .getPokemonByName(name)
    .then((res: any) => {
      // To throw error
      // throw "Not Found";
      setLoading(false);
      setPokemon(res);
    })
    .catch((err: any) => {
      setLoading(false);
      setError(err);
    });
};
