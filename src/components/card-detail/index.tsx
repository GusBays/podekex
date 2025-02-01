import React, { useEffect, useState } from "react"
import './styles.scss'
import { CardDetailProps } from "./types"
import { PokeApiPokemonAbility, PokeApiPokemonEvolutionChain, PokeApiPokemonSpecie, PokeApiPokemonSpecieFlavorText, PokeApiPokemonType } from "../../services/poke-api/types"
import { pokeApiService } from "../../services/poke-api"
import { POKE_API_IMAGE_URL } from "../../@constants/images"
import { getColorBy } from "../../utils/pokemon"
import Pill from "../pill"

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

    const toRenderTypes = (type: PokeApiPokemonType) =>  {
        const color = getColorBy(type)
        const key = `${pokemon?.id}-${type.type.name}`
        return <Pill key={key} text={type.type.name} color={color} />
    }

    const byEnglish = (specie: PokeApiPokemonSpecieFlavorText) => 'en' === specie.language.name

    const toRenderAbilities = (ability: PokeApiPokemonAbility) => {
        const key = `${pokemon?.id}-${ability.ability.name}`
        return <Pill key={key} text={ability.ability.name} color={'#a9a9a9'} />
    }

    return (
        <div className="card-detail">
            <img
                className="card-detail-image"
                src={pokemon ? `${POKE_API_IMAGE_URL}/versions/generation-v/black-white/animated/${pokemon.id}.gif` : ''}
            />

            <div className='card-info card-detail-info'>
                <div className='card-title'>
                    {pokemon && <span className="muted">N° {pokemon.id}</span>}
                    {pokemon
                        ? <h4 className="name">{pokemon.name}</h4>
                        : <h4 className="muted">Select a pokemon to display here</h4>
                    }
                </div>
                <div className="card-types">
                    {pokemon && pokemon.types.map(toRenderTypes)}
                </div>

                {specie &&
                    <div className="card-description">
                        <h5 className="subtitle">Description</h5>
                        <p className="muted" style={{ fontSize: '0.8rem'}}>{specie.flavor_text_entries.find(byEnglish)?.flavor_text}</p>
                    </div>
                }

                {pokemon &&
                    <div className="card-dimensions">
                        <div className="card-dimension">
                            <h5 className="subtitle">Weight</h5>
                            <Pill text={`${pokemon.weight / 10} kg`} color="#a9a9a9" />
                        </div>
                        <div className="card-dimension">
                            <h5 className="subtitle">Height</h5>
                            <Pill text={`${pokemon.height} m`} color="#a9a9a9" />
                        </div>
                    </div>
                }

                {pokemon &&
                    <div className="card-abilities">
                        <h5 className="subtitle">Abilities</h5>
                        <div className="card-ability">
                            {pokemon.abilities.map(toRenderAbilities)}
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}

export default CardDetail