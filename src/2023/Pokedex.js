import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Pokedex = () => {
  const [pokemon, setPokemon] = useState([])
  const [num, setNum] = useState(1)
  const [sprite, setSprite] = useState('')

  useEffect(() => {
    async function getPokemon() {
      try {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
        const sprite =
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
        const results = await axios.get(url)
        const data = results.data.results
        setSprite(sprite)
        setPokemon(data)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    getPokemon()
  }, [])

  return (
    <div className="h-screen w-full items-center text-center">
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-96 flex-row border-4 border-black">
          <h1 className="font-bold underline">Pokedex</h1>
          <select value={num} onChange={(e) => setNum(e.target.value)}>
            {pokemon.map((item, i) => {
              return (
                <option key={i} value={i + 1}>
                  {item.name}
                </option>
              )
            })}
          </select>
          <h1>{pokemon[num - 1]?.name}</h1>
          <img className="mx-auto object-cover" src={`${sprite}${num}.png`} />
        </div>
      </div>
    </div>
  )
}

export default Pokedex
