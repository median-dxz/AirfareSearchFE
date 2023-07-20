export interface FlightResult {
  filghts: Filght[];
  agencies: string[];
  price: number;
}

export interface Filght {
  carrier: string;
  flightNo: string;
  departure: string;
  arrival: string;
  departureDatetime: Date;
  arrivalDatetime: Date;
  cabins: Cabin[];
}

export type Cabin = "F" | "C" | "Y";
