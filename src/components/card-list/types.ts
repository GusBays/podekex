import { PokeApiPokemon } from "../../services/poke-api/types"

export interface CardListProps {
    id: number
    onClick: (pokemon: PokeApiPokemon) => void
}