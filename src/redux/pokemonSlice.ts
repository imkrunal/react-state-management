import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { Pokedex } from "pokeapi-js-wrapper";

export const getAllPokemons = createAsyncThunk(
  "get-all-pokemons",
  async (_, { rejectWithValue }) => {
    try {
      // throw "Throwing Error :D";
      const pokeApi = new Pokedex();
      const res = pokeApi
        .getPokemonsList({ offset: 0, limit: 10, cacheImages: true })
        .then(({ results }: any) => {
          return results.map((result: any) =>
            result.url.replace("https://pokeapi.co", "")
          );
        })
        .then(async (res: any) => {
          return await pokeApi.resource(res);
        });
      return res;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getPokemon = createAsyncThunk(
  "get-pokemon",
  async (name: string, { rejectWithValue }) => {
    try {
      // throw "Throwing Error :D";
      const pokeApi = new Pokedex();
      const res = await pokeApi.getPokemonByName(name);
      return res;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    allPokemons: { loading: false, pokemons: null, error: null },
    getPokemon: { loading: false, pokemon: null, error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPokemons.pending, (state) => {
      state.allPokemons.loading = true;
    });
    builder.addCase(getAllPokemons.fulfilled, (state, { payload }) => {
      state.allPokemons.loading = false;
      state.allPokemons.pokemons = payload;
      state.allPokemons.error = null;
    });
    builder.addCase(getAllPokemons.rejected, (state, { payload }: any) => {
      state.allPokemons.loading = false;
      state.allPokemons.error = payload;
    });
    builder.addCase(getPokemon.pending, (state) => {
      state.getPokemon.loading = true;
    });
    builder.addCase(getPokemon.fulfilled, (state, { payload }) => {
      state.getPokemon.loading = false;
      state.getPokemon.pokemon = payload;
      state.getPokemon.error = null;
    });
    builder.addCase(getPokemon.rejected, (state, { payload }: any) => {
      state.getPokemon.loading = false;
      state.getPokemon.error = payload;
    });
  },
});

export default pokemonSlice.reducer;
