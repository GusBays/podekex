import React, { useEffect, useState } from "react"
import './styles.scss'
import { CardDetailProps } from "./types"
import { PokeApiPokemonEvolutionChain, PokeApiPokemonSpecie } from "../../services/poke-api/types"
import { pokeApiService } from "../../services/poke-api"
import { POKE_API_IMAGE_URL } from "../../@constants/images"

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
            <img
                className="card-detail-image"
                src={pokemon ? `${POKE_API_IMAGE_URL}/versions/generation-v/black-white/animated/${pokemon.id}.gif` : ''}
            />

            <div className='card-detail-info'>
                <h4 className="card-detail-title">
                    {pokemon
                        ? pokemon.name
                        : 'Select a pokemon to display here'
                    }
                </h4>
            </div>
        </div>
    )
}

export default CardDetail