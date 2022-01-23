import { formatName } from "../utils";

type PokemonMovesProps = {
  pokemon: {
    moves: Array<{ move: { name: string } }>;
  };
};

const PokemonMoves = ({ pokemon }: PokemonMovesProps) => {
  return (
    <div className="flex flex-wrap mt-2">
      {pokemon.moves.map((move, moveIndex) => (
        <div key={moveIndex} className="bg-gray-700 rounded-md m-1 px-2 py-1">
          {formatName(move.move.name)}
        </div>
      ))}
    </div>
  );
};

export default PokemonMoves;
