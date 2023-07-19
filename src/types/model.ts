export interface City {
  name: string;
  latitude: number;
  longitude: number;
}

export interface SearchParams {
  [key: string]: string;
}
