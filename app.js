App = {
    loadPokemons: async () => {
        this.myPokemons = await Pokemons.getPokemons()
        App.renderPokemons(this.myPokemons)
    },
    renderPokemons: (pokemons) => {
        pokemons.forEach(pokemon => {
            const pokemonCard = document.createElement('div')
            pokemonCard.classList.add('pokemon-card')
            pokemonCard.innerHTML = `
                <span class="pokemon-name">${pokemon.name}</span>
            `
            document.querySelector('#pokemons').appendChild(pokemonCard)
        })
    }
}

$(() => {
    $(window).load(() => {
        App.loadPokemons()
    })
})