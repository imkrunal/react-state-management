import { formatName } from "../utils";
import * as Progress from "@radix-ui/react-progress";
import { Link } from "react-router-dom";

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  stats: Array<{ stat: { name: string }; base_stat: number }>;
};

export type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="p-8 border-b dark:border-gray-800 relative">
      <Link
        to={`/pokemon/${pokemon.name}`}
        className="absolute top-0 left-0 right-0 bottom-0 z-50"
      />
      <div className="md:grid grid-cols-3 gap-4">
        <div className="dark:bg-gray-800 rounded-md relative p-4">
          <div className="dark:bg-gray-700 absolute top-0 left-0 z-10 p-4 rounded-md">
            #{pokemon.id}
          </div>
          <div className="flex flex-col items-center relative">
            <img src={pokemon.sprites?.front_default} />
            <div className="text-2xl">{formatName(pokemon.name)}</div>
            <div className="flex items-center space-x-2 my-2">
              {pokemon.types?.map((type, typeIndex) => (
                <div
                  className="dark:bg-gray-700 px-2 py-1 rounded-md text-sm"
                  key={typeIndex}
                >
                  {formatName(type.type.name)}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {pokemon.abilities?.map((ability, abilityIndex) => (
                <div className="py-1 text-sm" key={abilityIndex}>
                  {formatName(ability.ability.name)}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {pokemon.stats?.map((stat, statIndex) => (
            <div
              key={statIndex}
              className="md:flex flex-wrap items-center md:space-x-4 py-2 md:px-8"
            >
              <div className="md:w-36">{formatName(stat.stat.name)}</div>
              <div className="md:w-16">{stat.base_stat}</div>
              <Progress.Root
                max={200}
                value={stat.base_stat}
                className="relative overflow-hidden bg-gray-600 flex-1 h-6 rounded-md"
              >
                <Progress.Indicator
                  className={`bg-white h-full`}
                  style={{
                    width: `${stat.base_stat}px`,
                  }}
                />
              </Progress.Root>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PokemonCard;
