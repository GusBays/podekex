import { HttpFacade } from "../http/facade"
import { PokeApiParams, PokeApiPaginate, PokeApiPokemon, PokeApiPokemonSpecie, PokeApiPokemonEvolutionChain } from "./types"

export interface PokeApiService {
    getPaginate(params: PokeApiParams): Promise<PokeApiPaginate>
    getOne(id: number): Promise<PokeApiPokemon>
    getSpecie(id: number): Promise<PokeApiPokemonSpecie>
    getEvolutionChain(id: number): Promise<PokeApiPokemonEvolutionChain>
}
const baseURL = `${process.env.REACT_APP_POKE_API_BASE_URL}/api/v2`

export const pokeApiService: PokeApiService = {
    async getPaginate(params: PokeApiParams): Promise<PokeApiPaginate> {
        return await HttpFacade.getPaginate(`${baseURL}/pokemon`, params)
    },
    async getOne(id: number): Promise<PokeApiPokemon> {
        return await HttpFacade.getOne(`${baseURL}/pokemon/${id}`)
    },
    async getSpecie(id: number): Promise<PokeApiPokemonSpecie> {
        return await HttpFacade.getOne(`${baseURL}/pokemon-species/${id}`)
    },
    async getEvolutionChain(id: number): Promise<PokeApiPokemonEvolutionChain> {
        return await HttpFacade.getOne(`${baseURL}/evolution-chain/${id}`)
    }
}