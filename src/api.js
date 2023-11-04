export const getPokemons = async () => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
  })

  return await data.json()
}

export const getDetails = async (url) => {
  const data = await fetch(url, {
    method: 'GET'
  })

  return await data.json()
}
