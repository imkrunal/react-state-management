import PokemonCard from "../components/PokemonCard";
import { useGetAllPokemonQuery } from "../redux/pokemon";

const Home = () => {
  const { data, isLoading, error }: any = useGetAllPokemonQuery();

  return (
    <div>
      {error !== null && <div className="text-red-500">{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data &&
        data !== null &&
        data.results.map((pokemon: any, pokemonIndex: number) => (
          <PokemonCard key={pokemonIndex} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};

export default Home;
