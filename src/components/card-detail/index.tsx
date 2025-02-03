import React, { ReactNode, useEffect, useState } from "react"
import './styles.scss'
import { CardDetailProps } from "./types"
import { PokeApiPokemonAbility, PokeApiPokemonEvolutionChain, PokeApiPokemonEvolutionChainChain, PokeApiPokemonSpecie, PokeApiPokemonSpecieFlavorText, PokeApiPokemonStat, PokeApiPokemonType } from "../../services/poke-api/types"
import { pokeApiService } from "../../services/poke-api"
import { POKE_API_IMAGE_URL } from "../../@constants/images"
import { getColorByStat, getColorByType, getTextByStat } from "../../utils/pokemon"
import Pill from "../pill"

const CardDetail: React.FC<CardDetailProps> = ({ pokemon, onClickEvolution }) => {
    const [specie, setSpecie] = useState<PokeApiPokemonSpecie | null>(null)
    const [evolutionChain, setEvolutionChain] = useState<PokeApiPokemonEvolutionChain | null>(null)

    const getData = async () => {
        if (!pokemon) return

        const res = await pokeApiService.getSpecie(pokemon.id)
        setSpecie(res)

        if (!res) return

        const evolutionChainId = res.evolution_chain.url.match(/\/(\d+)\/$/)?.at(1)

        if (!evolutionChainId) return

        setEvolutionChain(await pokeApiService.getEvolutionChain(+evolutionChainId))
    }

    useEffect(() => {
        getData()
    }, [pokemon])

    const toRenderTypes = (type: PokeApiPokemonType) =>  {
        const color = getColorByType(type)
        const key = `${pokemon?.id}-${type.type.name}`
        return <Pill key={key} text={type.type.name} color={color} />
    }

    const byEnglish = (specie: PokeApiPokemonSpecieFlavorText) => 'en' === specie.language.name

    const toRenderAbilities = (ability: PokeApiPokemonAbility) => {
        const key = `${pokemon?.id}-${ability.ability.name}`
        return <Pill key={key} text={ability.ability.name} color={'#F6F8FC'} />
    }

    const toRenderStats = (stat: PokeApiPokemonStat) => {
        const key = `${pokemon?.id}-${stat.stat.name}`
        return (
            <div className="stat">
                <Pill key={key} text={getTextByStat(stat)} color={getColorByStat(stat)} rounded={true} />
                <span>{stat.base_stat.toString()}</span>
            </div>
        )
    }

    const toRenderEvolution = (evolution: PokeApiPokemonEvolutionChainChain): ReactNode => {
        const id = evolution.species.url.match(/\/(\d+)\/$/)?.at(1)

        if (!id) return null

        const key = `${id}-${evolution.species.name}`
        const details = evolution.evolution_details[0]
        const nextEvolution = evolution.evolves_to

        return (
            /** @ts-ignore */
            <>
                <div className="card-evolution" key={key}>
                    {details?.min_level && 
                        <Pill text={details?.min_level.toString()} color={'#F6F8FC'} />
                    }
                    <button onClick={async () => await onClickEvolution(+id)} disabled={!id || +id === pokemon?.id}>
                        <img src={`${POKE_API_IMAGE_URL}/${id}.png`} />
                    </button>
                </div>
                {nextEvolution && nextEvolution.map(toRenderEvolution)}
            </>
        )
    }

    return (
        <div className="card-detail">
            <img
                className="card-detail-image"
                src={pokemon
                        ? `${POKE_API_IMAGE_URL}/versions/generation-v/black-white/animated/${pokemon.id}.gif`
                        : '/assets/images/empty-pokemon.png'}
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
                            <Pill text={`${pokemon.weight / 10} kg`} color="#F6F8FC" />
                        </div>
                        <div className="card-dimension">
                            <h5 className="subtitle">Height</h5>
                            <Pill text={`${pokemon.height} m`} color="#F6F8FC" />
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

                {pokemon &&
                    <div className="card-stats">
                        <h5 className="subtitle">Stats</h5>
                        <div className="card-stat">
                            {pokemon.stats.map(toRenderStats)}
                        </div>
                    </div>
                }

                {evolutionChain &&
                    <div className="card-evolutions-container">
                        <h5 className="subtitle">Evolution</h5>
                        <div className="card-evolutions">
                            {toRenderEvolution(evolutionChain.chain)}
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}

export default CardDetail