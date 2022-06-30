/* Author: 

*/
const pokecontainer = document.querySelector(".poke-container");
const pokecount = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const main_types = Object.keys(colors)

function fetchpokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      createpokemoncard(data);
    });
}

function fetchpokemons() {
  for (let i = 1; i <= pokecount; i++) {
    fetchpokemon(i);
  }
}

fetchpokemons();

function createpokemoncard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const poke_types = pokemon.types.map(type => type.type.name)
  const type = main_types.find(type => poke_types.indexOf(type) > -1)

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = colors[type]
  card.style.backgroundColor = color

  const pokeinnerhtml = `
      <div class='img-container'>
        <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png'>
      </div>
      <div class='info'>
        <span class='number'>#${pokemon.id.toString().padStart(3, '0')}</span>
        <h4 class='name'>${name}</h4>
        <span class="type">Type:${type}</span>
      </div>
    `;

  card.innerHTML = pokeinnerhtml;
  pokecontainer.appendChild(card);
}
