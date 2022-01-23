import { useSelector } from "react-redux";
import { formatName } from "../utils";

const PokemonMoves = () => {
  const { pokemon } = useSelector((state: any) => ({
    pokemon: state.pokemon.getPokemon.pokemon,
  }));

  return (
    <div className="flex flex-wrap mt-2">
      {pokemon.moves.map((move: any, moveIndex: number) => (
        <div key={moveIndex} className="bg-gray-700 rounded-md m-1 px-2 py-1">
          {formatName(move.move.name)}
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
