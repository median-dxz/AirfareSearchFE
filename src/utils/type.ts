export interface SearchResult {
  data: FlightResult[];
  time: number; // ms
  service: string; // url
}

export interface FlightResult {
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

export interface SeachRoute {
  id: number;
  departure?: City;
  arrival?: City;
  departureDate?: Date;
}

export interface City {
  code: string;
  name: string;
}

export const stringifyCity = (city: City) => `${city.name}(${city.code})`;

export type Cabin = "F" | "C" | "Y";
