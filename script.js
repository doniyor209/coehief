import { pokemons } from './pokemons.js';

const ota = document.getElementById('ota');
const input = document.getElementById('input');
const select = document.getElementById('select');
const sortSelect = document.getElementById('sort-select');

function pokemonsView(data) {
    ota.innerHTML = '';
    data.map(pokimon => {
        const div = document.createElement('div');
        div.classList.add("card")
        div.classList.add('pokimon');
        div.innerHTML = `
            <h2>${pokimon.name}</h2>
            <img src="${pokimon.img}" alt="${pokimon.name}">
            <button>${pokimon.type}</button>
            <h3>candy count: ${pokimon.candy_count || 0}</h3>
            <h3>weight: ${pokimon.weight}</h3>
            <h4>${pokimon.weaknesses}</h4>
            <div class="p-id">${pokimon.num}</div>
            <div class="time">${pokimon.spawn_time}</div>
        `;
        ota.appendChild(div);
    })
};

pokemonsView(pokemons);

input.addEventListener("input", () => {
    const a = pokemons.filter(pok => pok.name.toLowerCase().includes(input.value.toLowerCase()));
    pokemonsView(a)
});


    select.addEventListener("change", () => {
        if (select.value === "All") {
            pokemonsView(pokemons);
        } else {
            const poks = pokemons.filter(pok => pok.weaknesses  .includes(select.value));
            pokemonsView(poks);
        }
    });






sortSelect.addEventListener("change", () => {
    if (sortSelect.value === "A-Z") {
        pokemons.sort((p1, p2) => p1.name.localeCompare(p2.name));
        pokemonsView(pokemons);
    } else {
        pokemons.sort((p1, p2) => p2.name.localeCompare(p1.name));
        pokemonsView(pokemons);
    }

});