import IResultsPokemon from "./IResultsPokemon";

export default interface IListPokemon {
  count: number;
  next: string;
  previous?: string;
  results: IResultsPokemon[]
}
