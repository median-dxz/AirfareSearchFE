import type { City, Flight, FlightResult, SearchRequest, SearchResponse, SearchRoute } from "../protos/SearchRequest";

export type { City, Flight, FlightResult, SearchRequest, SearchResponse, SearchRoute };

export enum Cabin {
  F = 0,
  C = 1,
  Y = 2,
  UNRECOGNIZED = -1,
}

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export const stringifyCity = (city: City) => `${city.name}(${city.code})`;

export const stringifyCabin = (cabin: Cabin) => {
  switch (cabin) {
    case Cabin.F:
      return "F";
    case Cabin.C:
      return "C";
    case Cabin.Y:
      return "Y";
    case Cabin.UNRECOGNIZED:
      return String(cabin);
  }
};

export const DateFormatter = (date: string | Date) => dayjs(date, "YYYYMMDD");

export const DateTimeFormatter = (datetime: string | Date) => dayjs(datetime, "YYYYMMDDHHmm");
