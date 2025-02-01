import React, { useEffect, useState } from "react"
import './styles.scss'
import { CardListProps } from "./types"
import { PokeApiPokemon, PokeApiPokemonType, PokeApiPokemonTypeEnum } from "../../services/poke-api/types"
import { pokeApiService } from "../../services/poke-api"
import { POKE_API_IMAGE_URL } from "../../@constants/images"
import Pill from "../pill"
import { BUG, DARK, DRAGON, ELECTRIC, FAIRY, FIGHTING, FIRE, FLYING, GHOST, GRASS, GROUND, ICE, NORMAL, POISON, PSYCHIC, ROCK, STEEL, WATER } from "../../@constants/colors"

const CardList: React.FC<CardListProps> = ({ id, onClick }) => {
    const [pokemon, setPokemon] = useState<PokeApiPokemon | null>(null)

    const getPokemon = async () => {
        if (pokemon) return
        setPokemon(await pokeApiService.getOne(id))
    }

    useEffect(() => {
        getPokemon()
    })

    const colors: Record<PokeApiPokemonTypeEnum, string> = {
        [PokeApiPokemonTypeEnum.GRASS]: GRASS,
        [PokeApiPokemonTypeEnum.FIRE]: FIRE,
        [PokeApiPokemonTypeEnum.WATER]: WATER,
        [PokeApiPokemonTypeEnum.BUG]: BUG,
        [PokeApiPokemonTypeEnum.NORMAL]: NORMAL,
        [PokeApiPokemonTypeEnum.POISON]: POISON,        
        [PokeApiPokemonTypeEnum.ELECTRIC]: ELECTRIC,
        [PokeApiPokemonTypeEnum.GROUND]: GROUND,
        [PokeApiPokemonTypeEnum.FIGHTING]: FIGHTING,
        [PokeApiPokemonTypeEnum.FLYING]: FLYING,
        [PokeApiPokemonTypeEnum.PSYCHIC]: PSYCHIC,
        [PokeApiPokemonTypeEnum.ROCK]: ROCK,
        [PokeApiPokemonTypeEnum.GHOST]: GHOST,
        [PokeApiPokemonTypeEnum.ICE]: ICE,
        [PokeApiPokemonTypeEnum.DRAGON]: DRAGON,
        [PokeApiPokemonTypeEnum.DARK]: DARK,
        [PokeApiPokemonTypeEnum.FAIRY]: FAIRY,
        [PokeApiPokemonTypeEnum.STEEL]: STEEL
    }

    const toRenderTypes = (type: PokeApiPokemonType) =>  {
        const color = colors[type.type.name] || NORMAL
        const key = `${pokemon?.id}-${type.type.name}`
        return <Pill key={key} text={type.type.name} color={color} />
    }

    return (
        <button className="card-list" onClick={() => pokemon ? onClick(pokemon) : null}>
            <img className="image" src={`${POKE_API_IMAGE_URL}/${id}.png`} />
            {pokemon &&
                <div className="info">
                    <div className="title">
                        <span className="number">N° {pokemon.id}</span>
                        <h4 className="name">{pokemon.name}</h4>
                    </div>
                    <div className="types">
                        {pokemon.types.map(toRenderTypes)}
                    </div>
                </div>
            }
        </button>
    )
}

export default CardList