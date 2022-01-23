import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonCard, { Pokemon } from "../components/PokemonCard";
import { getAllPokemons } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, pokemons, error } = useSelector((state: any) => ({
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
