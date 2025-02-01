export interface PokeApiParams {
  limit: number;
  offset: number;
}

export interface PokeApiPaginate {
  count: number;
  next: string;
  previous: string;
  results: PokeApiPokemonPaginate[];
}

export interface PokeApiPokemonPaginate {
  name: string;
  url: string;
}

export interface PokeApiPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  location_area_encounters: string;
  base_experience: number;
  abilities: PokeApiPokemonAbility[];
  cries: PokeApiPokemonCrie[];
  forms: PokeApiPokemonForm[];
  game_indices: PokeApiPokemonGameIndex[];
  held_items: PokeApiPokemonHeldItem[];
  moves: PokeApiPokemonMove[];
  species: PokeApiPokemonSpecie;
  sprites: PokeApiPokemonSprites;
  stats: PokeApiPokemonStat[];
  types: PokeApiPokemonType[];
}

export interface PokeApiPokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokeApiPokemonCrie {
  latest: string;
  legacy: string;
}

export interface PokeApiPokemonForm {
  name: string;
  url: string;
}

export interface PokeApiPokemonGameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface PokeApiPokemonHeldItem {
  item: {
    name: string;
    url: string;
  };
  version_details: PokeApiPokemonHeldItemVersionDetail[];
}

export interface PokeApiPokemonHeldItemVersionDetail {
  rarity: number;
  version: {
    name: string;
    url: string;
  };
}

export interface PokeApiPokemonMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: PokeApiPokemonMoveVersionGroupDetail[];
}

export interface PokeApiPokemonMoveVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  version_group: {
    name: string;
    url: string;
  };
}

export interface PokeApiPokemonSpecie {
  name: string;
  url: string;
}

export interface PokeApiPokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Record<string, any>;
}

export interface PokeApiPokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokeApiPokemonType {
  slot: number;
  type: {
    name: PokeApiPokemonTypeEnum;
    url: string;
  };
}

export enum PokeApiPokemonTypeEnum {
  GRASS = "grass",
  FIRE = "fire",
  WATER = "water",
  BUG = "bug",
  NORMAL = "normal",
  POISON = "poison",
  ELECTRIC = "electric",
  GROUND = "ground",
  FIGHTING = "fighting",
  FLYING = "flying",
  PSYCHIC = "psychic",
  ROCK = "rock",
  GHOST = "ghost",
  ICE = "ice",
  DRAGON = "dragon",
  DARK = "dark",
  STEEL = "steel",
  FAIRY = "fairy",
}

export interface PokeApiPokemonSpecie {
  base_happiness: number;
  capture_rate: number;
  color: PokeApiPokemonSpecieColor;
  egg_groups: PokeApiPokemonSpecieEggGroup[];
  evolution_chain: PokeApiPokemonSpecieEvolutionChain;
  evolves_from_species: PokeApiPokemonSpecieEvolvesFrom | null;
  flavor_text_entries: PokeApiPokemonSpecieFlavorText[];
  form_descriptions: PokeApiPokemonSpecieFormDescription[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: PokeApiPokemonSpecieGenera[];
  generation: PokeApiPokemonSpecieGeneration;
  growth_rate: PokeApiPokemonSpecieGrowthRate;
  habitat: PokeApiPokemonSpecieHabitat | null;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: PokeApiPokemonSpecieName[];
  order: number;
  pal_park_encounters: PokeApiPokemonSpeciePalParkEncounter[];
  pokedex_numbers: PokeApiPokemonSpeciePokedexNumber[];
  shape: PokeApiPokemonSpecieShape;
  varieties: PokeApiPokemonSpecieVariety[];
}

export interface PokeApiPokemonSpecieColor {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieEggGroup {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieEvolutionChain {
  url: string;
}

export interface PokeApiPokemonSpecieEvolvesFrom {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieFlavorText {
  flavor_text: string;
  language: PokeApiPokemonSpecieLanguage;
  version: PokeApiPokemonSpecieVersion;
}

export interface PokeApiPokemonSpecieFormDescription {
  description: string;
  language: PokeApiPokemonSpecieLanguage;
}

export interface PokeApiPokemonSpecieGenera {
  genus: string;
  language: PokeApiPokemonSpecieLanguage;
}

export interface PokeApiPokemonSpecieGeneration {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieGrowthRate {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieHabitat {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieName {
  name: string;
  language: PokeApiPokemonSpecieLanguage;
}

export interface PokeApiPokemonSpeciePalParkEncounter {
  area: PokeApiPokemonSpeciePalParkArea;
  base_score: number;
  rate: number;
}

export interface PokeApiPokemonSpeciePalParkArea {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpeciePokedexNumber {
  entry_number: number;
  pokedex: PokeApiPokemonSpeciePokedex;
}

export interface PokeApiPokemonSpeciePokedex {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieShape {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieVariety {
  is_default: boolean;
  pokemon: PokeApiPokemonSpecieVarietyPokemon;
}

export interface PokeApiPokemonSpecieVarietyPokemon {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieLanguage {
  name: string;
  url: string;
}

export interface PokeApiPokemonSpecieVersion {
  name: string;
  url: string;
}

export interface PokeApiPokemonEvolutionChain {
  id: number;
  baby_trigger_item: PokeApiPokemonEvolutionChainItem;
  chain: PokeApiPokemonEvolutionChainChain;
}

export interface PokeApiPokemonEvolutionChainChain {
  evolution_details: PokeApiPokemonEvolutionChainEvolutionDetail[];
  evolves_to: PokeApiPokemonEvolutionChainChain[];
  is_baby: boolean;
  species: PokeApiPokemonEvolutionChainSpecies;
}

export interface PokeApiPokemonEvolutionChainEvolutionDetail {
  item: PokeApiPokemonEvolutionChainItem;
  trigger: PokeApiPokemonEvolutionChainTrigger;
  gender: number;
  held_item: PokeApiPokemonEvolutionChainItem;
  known_move: PokeApiPokemonEvolutionChainMove;
  known_move_type: PokeApiPokemonEvolutionChainType;
  location: PokeApiPokemonEvolutionChainLocation;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: PokeApiPokemonEvolutionChainSpecies;
  party_type: PokeApiPokemonEvolutionChainType;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: PokeApiPokemonEvolutionChainSpecies;
  turn_upside_down: boolean;
}

export interface PokeApiPokemonEvolutionChainSpecies {
  name: string;
  url: string;
}

export interface PokeApiPokemonEvolutionChainItem {
  name: string;
  url: string;
}

export interface PokeApiPokemonEvolutionChainTrigger {
  name: string;
  url: string;
}

export interface PokeApiPokemonEvolutionChainMove {
  name: string;
  url: string;
}

export interface PokeApiPokemonEvolutionChainType {
  name: string;
  url: string;
}

export interface PokeApiPokemonEvolutionChainLocation {
  name: string;
  url: string;
}
