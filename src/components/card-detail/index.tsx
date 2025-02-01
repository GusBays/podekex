import React, { useEffect, useState } from "react"
import './styles.scss'
import { CardDetailProps } from "./types"
import { PokeApiPokemonEvolutionChain, PokeApiPokemonSpecie } from "../../services/poke-api/types"
import { pokeApiService } from "../../services/poke-api"

const CardDetail: React.FC<CardDetailProps> = ({ pokemon }) => {
    const [specie, setSpecie] = useState<PokeApiPokemonSpecie | null>(null)
    const [evolutionChain, setEvolutionChain] = useState<PokeApiPokemonEvolutionChain | null>(null)

    const getData = async () => {
        if (!pokemon) return

        const [resSpecie, resEvolutionChain] = await Promise.all([
            pokeApiService.getSpecie(pokemon.id),
            pokeApiService.getEvolutionChain(pokemon.id)
        ])

        setSpecie(resSpecie)
        setEvolutionChain(resEvolutionChain)
    }

    useEffect(() => {
        getData()
    }, [pokemon])

    return (
        <div className="card-detail">
            <h1>{pokemon?.name}</h1>
        </div>
    )
}

export default CardDetail