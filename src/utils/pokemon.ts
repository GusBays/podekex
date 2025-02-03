import {
  PokeApiPokemonStat,
  PokeApiPokemonStatTypeEnum,
  PokeApiPokemonType,
  PokeApiPokemonTypeEnum,
} from "../services/poke-api/types";
import {
  ATTACK,
  BUG,
  DARK,
  DEFENSE,
  DRAGON,
  ELECTRIC,
  FAIRY,
  FIGHTING,
  FIRE,
  FLYING,
  GHOST,
  GRASS,
  GROUND,
  HP,
  ICE,
  NORMAL,
  POISON,
  PSYCHIC,
  ROCK,
  SPECIAL_ATTACK,
  SPECIAL_DEFENSE,
  SPEED,
  STEEL,
  TOTAL,
  WATER,
} from "../@constants/colors";

export function getColorByType(type: PokeApiPokemonType): string {
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

export function getColorByStat(stat: PokeApiPokemonStat): string {
  const colors: Record<PokeApiPokemonStatTypeEnum, string> = {
    [PokeApiPokemonStatTypeEnum.HP]: HP,
    [PokeApiPokemonStatTypeEnum.ATTACK]: ATTACK,
    [PokeApiPokemonStatTypeEnum.DEFENSE]: DEFENSE,
    [PokeApiPokemonStatTypeEnum.SPECIAL_ATTACK]: SPECIAL_ATTACK,
    [PokeApiPokemonStatTypeEnum.SPECIAL_DEFENSE]: SPECIAL_DEFENSE,
    [PokeApiPokemonStatTypeEnum.SPEED]: SPEED,
    [PokeApiPokemonStatTypeEnum.TOTAL]: TOTAL
  }

  return colors[stat.stat.name] || NORMAL
}

export function getTextByStat(stat: PokeApiPokemonStat): string {
  const texts: Record<PokeApiPokemonStatTypeEnum, string> = {
    [PokeApiPokemonStatTypeEnum.HP]: 'HP',
    [PokeApiPokemonStatTypeEnum.ATTACK]: 'ATK',
    [PokeApiPokemonStatTypeEnum.DEFENSE]: 'DEF',
    [PokeApiPokemonStatTypeEnum.SPECIAL_ATTACK]: 'STK',
    [PokeApiPokemonStatTypeEnum.SPECIAL_DEFENSE]: 'SDF',
    [PokeApiPokemonStatTypeEnum.SPEED]: 'SPD',
    [PokeApiPokemonStatTypeEnum.TOTAL]: 'TOT'
  }

  return texts[stat.stat.name]
}