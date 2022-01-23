import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import PokemonMoves from "../components/PokemonMoves";
import { getPokemon } from "../redux/actions";

const PokemonInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();
  const { loading, pokemon, error } = useSelector((state: any) => ({
    loading: state.pokemon.getPokemon.loading,
    pokemon: state.pokemon.getPokemon.pokemon,
    error: state.pokemon.getPokemon.error,
  }));

  useEffect(() => {
    id && dispatch(getPokemon(id));
  }, [dispatch, id]);

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
              <PokemonMoves />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PokemonInfo;
