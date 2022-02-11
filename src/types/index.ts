export type Location = {
  id: string;
  name: string;
  type: string;
  dimension: string;
  created: string;
};

export type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  created: string;
};

export type Character = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: Episode[];
  created: string;
};

export type Info = {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
};

export interface GetCharactersResponse {
  characters: { info: Info; results: Character[] };
}

export type Filter = {
  name: string;
  status: string;
  species: string;
  gender: string;
  type: string;
};

export type FormValues = Omit<Filter, "name">;
