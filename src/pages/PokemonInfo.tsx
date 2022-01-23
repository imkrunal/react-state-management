import { Link, useParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import PokemonMoves from "../components/PokemonMoves";
import { useGetPokemonQuery } from "../redux/pokemon";

const PokemonInfo = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetPokemonQuery(id);

  return (
    <div>
      <Link to="/" className="px-8 pt-8 block">
        Go Back
      </Link>
      {error !== null && <div className="text-red-500 px-8 py-8">{error}</div>}
      {isLoading ? (
        <div>Loading</div>
      ) : (
        data &&
        data !== null && (
          <>
            <PokemonCard pokemon={data} />
            <div className="px-8 mt-8">
              <div className="text-xl font-medium">Moves List</div>
              <PokemonMoves pokemon={data} />
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PokemonInfo;
