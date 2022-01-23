import PokemonCard from "../components/PokemonCard";
import pokemons from "../pokemons.json";

const Home = () => {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Home;
