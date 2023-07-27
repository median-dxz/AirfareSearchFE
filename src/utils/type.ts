export interface FlightResult {
  filghts: Filght[];
  agencies: string[];
  price: number;
}

export interface Filght {
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
