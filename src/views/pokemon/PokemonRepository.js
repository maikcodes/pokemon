const POKEMON_API = "http://localhost:3001/pokemons";

export async function getAllPokemon() {
  const pokemonList = await fetch(POKEMON_API).then((response) =>
    response.json()
  );
  return pokemonList;
}

export async function createPokemon(pokemon) {
  await fetch(POKEMON_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pokemon),
  });
}

export async function editPokemon(pokemon) {
  await fetch(`${POKEMON_API}/${pokemon.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pokemon),
  });
}

export async function deletePokemon(pokemonId) {
  await fetch(`${POKEMON_API}/${pokemonId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
}
