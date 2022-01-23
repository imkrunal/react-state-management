import { useEffect, useState } from "react";
import PokemonCard, { Pokemon } from "../components/PokemonCard";
import { getAllPokemons } from "../services/pokemon";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Array<Pokemon> | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPokemons(setLoading, setPokemons, setError);
  }, []);

  return (
    <div>
      {error !== null && <div className="text-red-500">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        error === null &&
        pokemons !== null &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};

export default Home;
