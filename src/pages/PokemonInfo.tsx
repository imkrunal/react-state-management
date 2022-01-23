import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import PokemonMoves from "../components/PokemonMoves";
import pokemons from "../pokemons.json";

const PokemonInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const pokemon = pokemons.find(function (pokemon) {
      return pokemon.id === Number(id);
    });
    pokemon ? setPokemon(pokemon) : setPokemon(null);
  }, [id]);

  return (
    <div>
      <Link to="/" className="px-8 pt-8 block">
        Go Back
      </Link>
      {pokemon !== null ? (
        <>
          <PokemonCard pokemon={pokemon} />
          <div className="px-8 mt-8">
            <div className="text-xl font-medium">Moves List</div>
            <PokemonMoves pokemon={pokemon} />
          </div>
        </>
      ) : (
        "Not Found"
      )}
    </div>
  );
};

export default PokemonInfo;
