App = {
    pokemonTypes: ['Grass', 'Fire', 'Poison', 'Electric'],
    loadPokemons: async () => {
        this.myPokemons = await Pokemons.getPokemons()
        App.renderPokemons(this.myPokemons)
    },
    renderPokemons: (pokemons) => {
        pokemons.forEach(pokemon => {
            const pokemonCard = document.createElement('div')
            pokemonCard.classList.add('pokemon-card')
            pokemonCard.setAttribute('pokemon-type', pokemon.types[0].type.name)
            pokemonCard.innerHTML = `
                <span class="pokemon-name">${pokemon.name}</span>
            `
            document.querySelector('#pokemons').appendChild(pokemonCard)
        })
    },
    renderPokemonTypes: () => {
        App.pokemonTypes.forEach(type => {
            const typeCard = document.createElement('div')
            typeCard.classList.add('type')
            typeCard.innerHTML = `
                <span>${type} <img src="./assets/type-icons/Pokémon_${type}_Type_Icon.svg" height="16px" alt="${type}"></span>
                <div class="type-drop" pokemon-type="${type.toLowerCase()}"></div>
            `
            document.querySelector('#types').appendChild(typeCard)
        })
    },
    init: () => {
        App.renderPokemonTypes()
        App.loadPokemons()
    }
}

$(() => {
    $(window).load(() => {
        App.init()
    })
})