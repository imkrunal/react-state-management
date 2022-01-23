import { useEffect, useState } from "react";
import PokemonCard, { Pokemon } from "../components/PokemonCard";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getAllPokemons } from "../redux/pokemonSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const { loading, pokemons, error }: any = useAppSelector((state) => ({
    loading: state.pokemon.allPokemons.loading,
    pokemons: state.pokemon.allPokemons.pokemons,
    error: state.pokemon.allPokemons.error,
  }));

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div>
      {error !== null && <div className="text-red-500">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        error === null &&
        pokemons !== null &&
        pokemons.map((pokemon: any) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};

export default Home;
