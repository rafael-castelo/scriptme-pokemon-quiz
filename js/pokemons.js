Pokemons = {
    limit: 20,
    getPokemons: async () => {
        return new Promise(async (resolve, reject) => {
            pokemons = []
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${Pokemons.limit}`)
            const data = await response.json()
            await Promise.all(data.results.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const pokeData = await response.json()
                pokemons.push(pokeData)
            }))
            resolve(pokemons)
        })
    },
}