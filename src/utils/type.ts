// request
export interface SeachRequest {
  people: number;
  maxResults: number;
  agencies: string[];
  routes: SeachRoute[];
}

export interface SeachRoute {
  id: number;
  departure?: City;
  arrival?: City;
  departureDate?: Date;
}

// response
export interface SearchResult {
  flights: Flight[];
  agencies: string[];
  price: number;
}

export interface Flight {
  carrier: string;
  flightNo: string;
  departure: City;
  arrival: City;
  departureDatetime: Date;
  arrivalDatetime: Date;
  cabins: Cabin[];
}

export interface City {
  code: string;
  name: string;
}

export const stringifyCity = (city: City) => `${city.name}(${city.code})`;

export type Cabin = "F" | "C" | "Y";
