import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import PokemonMoves from "../components/PokemonMoves";
import pokemons from "../pokemons.json";
import { getPokemon } from "../services/pokemon";

const PokemonInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    id && getPokemon(id, setLoading, setPokemon, setError);
  }, [id]);

  return (
    <div>
      <Link to="/" className="px-8 pt-8 block">
        Go Back
      </Link>
      {error !== null && <div className="text-red-500 px-8 py-8">{error}</div>}
      {loading ? (
        <div>Loading</div>
      ) : (
        pokemon !== null && (
          <>
            <PokemonCard pokemon={pokemon} />
            <div className="px-8 mt-8">
              <div className="text-xl font-medium">Moves List</div>
              <PokemonMoves pokemon={pokemon} />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PokemonInfo;
