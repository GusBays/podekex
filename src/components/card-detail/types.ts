import { PokeApiPokemon } from "../../services/poke-api/types";

export interface CardDetailProps {
    pokemon: PokeApiPokemon | null
    onClickEvolution: (id: number) => Promise<void> | void
    onClickClose: VoidFunction
}