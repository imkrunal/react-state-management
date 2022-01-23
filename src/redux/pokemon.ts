import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query<{}, void>({
      query: () => `pokemon`,
    }),
    getPokemon: builder.query<{}, string>({
      query: (name: any) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonQuery, useGetAllPokemonQuery } = pokemonApi;
