interface IListPokemon {
  count: number;
  next: string;
  previous?: string;
  results: IResultsPokemon[]
}
