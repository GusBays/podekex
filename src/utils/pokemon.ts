import {
  PokeApiPokemonType,
  PokeApiPokemonTypeEnum,
} from "../services/poke-api/types";
import {
  BUG,
  DARK,
  DRAGON,
  ELECTRIC,
  FAIRY,
  FIGHTING,
  FIRE,
  FLYING,
  GHOST,
  GRASS,
  GROUND,
  ICE,
  NORMAL,
  POISON,
  PSYCHIC,
  ROCK,
  STEEL,
  WATER,
} from "../@constants/colors";

export function getColorBy(type: PokeApiPokemonType): string {
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
    [PokeApiPokemonTypeEnum.STEEL]: STEEL,
  };

  return colors[type.type.name] || NORMAL;
}
