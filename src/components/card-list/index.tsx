import React, { useEffect, useState } from "react"
import './styles.scss'
import { CardListProps } from "./types"
import { PokeApiPokemon, PokeApiPokemonType, PokeApiPokemonTypeEnum } from "../../services/poke-api/types"
import { pokeApiService } from "../../services/poke-api"
import { POKE_API_IMAGE_URL } from "../../@constants/images"
import Pill from "../pill"
import { getColorByType } from "../../utils/pokemon"
import { useLoading } from "../../providers/loader"

const CardList: React.FC<CardListProps> = ({ id, onClick }) => {
    const [pokemon, setPokemon] = useState<PokeApiPokemon | null>(null)
    const { loading } = useLoading()

    const getPokemon = async () => {
        if (pokemon) return
        setPokemon(await pokeApiService.getOne(id))
    }

    useEffect(() => {
        getPokemon()
    })

    const toRenderTypes = (type: PokeApiPokemonType) =>  {
        const color = getColorByType(type)
        const key = `${pokemon?.id}-${type.type.name}`
        return <Pill key={key} text={type.type.name} color={color} />
    }

    return (
        <button className="card-list" onClick={() => pokemon ? onClick(pokemon) : null} disabled={loading}>
            <img className="image" src={`${POKE_API_IMAGE_URL}/${id}.png`} />
            {pokemon &&
                <div className="card-info">
                    <div className="card-title">
                        <span className="muted">N° {pokemon.id}</span>
                        <h4 className="name">{pokemon.name}</h4>
                    </div>
                    <div className="card-types">
                        {pokemon.types.map(toRenderTypes)}
                    </div>
                </div>
            }
        </button>
    )
}

export default CardList