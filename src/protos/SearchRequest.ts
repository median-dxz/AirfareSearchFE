/* eslint-disable */
import { ChannelCredentials, Client, makeGenericClientConstructor, Metadata } from "@grpc/grpc-js";
import type {
  CallOptions,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "AirfareSearch";

export enum Cabin {
  F = 0,
  C = 1,
  Y = 2,
  UNRECOGNIZED = -1,
}

export function cabinFromJSON(object: any): Cabin {
  switch (object) {
    case 0:
    case "F":
      return Cabin.F;
    case 1:
    case "C":
      return Cabin.C;
    case 2:
    case "Y":
      return Cabin.Y;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Cabin.UNRECOGNIZED;
  }
}

export function cabinToJSON(object: Cabin): string {
  switch (object) {
    case Cabin.F:
      return "F";
    case Cabin.C:
      return "C";
    case Cabin.Y:
      return "Y";
    case Cabin.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface City {
  name: string;
  code: string;
}

export interface Flight {
  carrier: string;
  flightNo: string;
  departure: City | undefined;
  arrival: City | undefined;
  departureDatetime: string;
  arrivalDatetime: string;
  cabins: Cabin[];
}

export interface FlightResult {
  flights: Flight[];
  price: number;
  agencies: string[];
}

export interface SearchResponse {
  data: FlightResult[];
}

export interface SearchRequest {
  people: number;
  maxResults: number;
  agencies: string[];
  routes: SearchRoute[];
}

export interface SearchRoute {
  id: number;
  departure: City | undefined;
  arrival: City | undefined;
  departureDate: string;
}

function createBaseCity(): City {
  return { name: "", code: "" };
}

export const City = {
  encode(message: City, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.code !== "") {
      writer.uint32(18).string(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): City {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): City {
    return { name: isSet(object.name) ? String(object.name) : "", code: isSet(object.code) ? String(object.code) : "" };
  },

  toJSON(message: City): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.code !== "") {
      obj.code = message.code;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<City>, I>>(base?: I): City {
    return City.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<City>, I>>(object: I): City {
    const message = createBaseCity();
    message.name = object.name ?? "";
    message.code = object.code ?? "";
    return message;
  },
};

function createBaseFlight(): Flight {
  return {
    carrier: "",
    flightNo: "",
    departure: undefined,
    arrival: undefined,
    departureDatetime: "",
    arrivalDatetime: "",
    cabins: [],
  };
}

export const Flight = {
  encode(message: Flight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.carrier !== "") {
      writer.uint32(10).string(message.carrier);
    }
    if (message.flightNo !== "") {
      writer.uint32(18).string(message.flightNo);
    }
    if (message.departure !== undefined) {
      City.encode(message.departure, writer.uint32(26).fork()).ldelim();
    }
    if (message.arrival !== undefined) {
      City.encode(message.arrival, writer.uint32(34).fork()).ldelim();
    }
    if (message.departureDatetime !== "") {
      writer.uint32(42).string(message.departureDatetime);
    }
    if (message.arrivalDatetime !== "") {
      writer.uint32(50).string(message.arrivalDatetime);
    }
    writer.uint32(58).fork();
    for (const v of message.cabins) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Flight {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlight();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.carrier = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.flightNo = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.departure = City.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.arrival = City.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.departureDatetime = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.arrivalDatetime = reader.string();
          continue;
        case 7:
          if (tag === 56) {
            message.cabins.push(reader.int32() as any);

            continue;
          }

          if (tag === 58) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cabins.push(reader.int32() as any);
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Flight {
    return {
      carrier: isSet(object.carrier) ? String(object.carrier) : "",
      flightNo: isSet(object.flightNo) ? String(object.flightNo) : "",
      departure: isSet(object.departure) ? City.fromJSON(object.departure) : undefined,
      arrival: isSet(object.arrival) ? City.fromJSON(object.arrival) : undefined,
      departureDatetime: isSet(object.departureDatetime) ? String(object.departureDatetime) : "",
      arrivalDatetime: isSet(object.arrivalDatetime) ? String(object.arrivalDatetime) : "",
      cabins: Array.isArray(object?.cabins) ? object.cabins.map((e: any) => cabinFromJSON(e)) : [],
    };
  },

  toJSON(message: Flight): unknown {
    const obj: any = {};
    if (message.carrier !== "") {
      obj.carrier = message.carrier;
    }
    if (message.flightNo !== "") {
      obj.flightNo = message.flightNo;
    }
    if (message.departure !== undefined) {
      obj.departure = City.toJSON(message.departure);
    }
    if (message.arrival !== undefined) {
      obj.arrival = City.toJSON(message.arrival);
    }
    if (message.departureDatetime !== "") {
      obj.departureDatetime = message.departureDatetime;
    }
    if (message.arrivalDatetime !== "") {
      obj.arrivalDatetime = message.arrivalDatetime;
    }
    if (message.cabins?.length) {
      obj.cabins = message.cabins.map((e) => cabinToJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Flight>, I>>(base?: I): Flight {
    return Flight.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Flight>, I>>(object: I): Flight {
    const message = createBaseFlight();
    message.carrier = object.carrier ?? "";
    message.flightNo = object.flightNo ?? "";
    message.departure = (object.departure !== undefined && object.departure !== null)
      ? City.fromPartial(object.departure)
      : undefined;
    message.arrival = (object.arrival !== undefined && object.arrival !== null)
      ? City.fromPartial(object.arrival)
      : undefined;
    message.departureDatetime = object.departureDatetime ?? "";
    message.arrivalDatetime = object.arrivalDatetime ?? "";
    message.cabins = object.cabins?.map((e) => e) || [];
    return message;
  },
};

function createBaseFlightResult(): FlightResult {
  return { flights: [], price: 0, agencies: [] };
}

export const FlightResult = {
  encode(message: FlightResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.flights) {
      Flight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== 0) {
      writer.uint32(16).int32(message.price);
    }
    for (const v of message.agencies) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FlightResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFlightResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.flights.push(Flight.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.price = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.agencies.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FlightResult {
    return {
      flights: Array.isArray(object?.flights) ? object.flights.map((e: any) => Flight.fromJSON(e)) : [],
      price: isSet(object.price) ? Number(object.price) : 0,
      agencies: Array.isArray(object?.agencies) ? object.agencies.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: FlightResult): unknown {
    const obj: any = {};
    if (message.flights?.length) {
      obj.flights = message.flights.map((e) => Flight.toJSON(e));
    }
    if (message.price !== 0) {
      obj.price = Math.round(message.price);
    }
    if (message.agencies?.length) {
      obj.agencies = message.agencies;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FlightResult>, I>>(base?: I): FlightResult {
    return FlightResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FlightResult>, I>>(object: I): FlightResult {
    const message = createBaseFlightResult();
    message.flights = object.flights?.map((e) => Flight.fromPartial(e)) || [];
    message.price = object.price ?? 0;
    message.agencies = object.agencies?.map((e) => e) || [];
    return message;
  },
};

function createBaseSearchResponse(): SearchResponse {
  return { data: [] };
}

export const SearchResponse = {
  encode(message: SearchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.data) {
      FlightResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data.push(FlightResult.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchResponse {
    return { data: Array.isArray(object?.data) ? object.data.map((e: any) => FlightResult.fromJSON(e)) : [] };
  },

  toJSON(message: SearchResponse): unknown {
    const obj: any = {};
    if (message.data?.length) {
      obj.data = message.data.map((e) => FlightResult.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SearchResponse>, I>>(base?: I): SearchResponse {
    return SearchResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SearchResponse>, I>>(object: I): SearchResponse {
    const message = createBaseSearchResponse();
    message.data = object.data?.map((e) => FlightResult.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSearchRequest(): SearchRequest {
  return { people: 0, maxResults: 0, agencies: [], routes: [] };
}

export const SearchRequest = {
  encode(message: SearchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.people !== 0) {
      writer.uint32(8).int32(message.people);
    }
    if (message.maxResults !== 0) {
      writer.uint32(16).int32(message.maxResults);
    }
    for (const v of message.agencies) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.routes) {
      SearchRoute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.people = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxResults = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.agencies.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.routes.push(SearchRoute.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchRequest {
    return {
      people: isSet(object.people) ? Number(object.people) : 0,
      maxResults: isSet(object.maxResults) ? Number(object.maxResults) : 0,
      agencies: Array.isArray(object?.agencies) ? object.agencies.map((e: any) => String(e)) : [],
      routes: Array.isArray(object?.routes) ? object.routes.map((e: any) => SearchRoute.fromJSON(e)) : [],
    };
  },

  toJSON(message: SearchRequest): unknown {
    const obj: any = {};
    if (message.people !== 0) {
      obj.people = Math.round(message.people);
    }
    if (message.maxResults !== 0) {
      obj.maxResults = Math.round(message.maxResults);
    }
    if (message.agencies?.length) {
      obj.agencies = message.agencies;
    }
    if (message.routes?.length) {
      obj.routes = message.routes.map((e) => SearchRoute.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SearchRequest>, I>>(base?: I): SearchRequest {
    return SearchRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SearchRequest>, I>>(object: I): SearchRequest {
    const message = createBaseSearchRequest();
    message.people = object.people ?? 0;
    message.maxResults = object.maxResults ?? 0;
    message.agencies = object.agencies?.map((e) => e) || [];
    message.routes = object.routes?.map((e) => SearchRoute.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSearchRoute(): SearchRoute {
  return { id: 0, departure: undefined, arrival: undefined, departureDate: "" };
}

export const SearchRoute = {
  encode(message: SearchRoute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.departure !== undefined) {
      City.encode(message.departure, writer.uint32(18).fork()).ldelim();
    }
    if (message.arrival !== undefined) {
      City.encode(message.arrival, writer.uint32(26).fork()).ldelim();
    }
    if (message.departureDate !== "") {
      writer.uint32(34).string(message.departureDate);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SearchRoute {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchRoute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.departure = City.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.arrival = City.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.departureDate = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SearchRoute {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      departure: isSet(object.departure) ? City.fromJSON(object.departure) : undefined,
      arrival: isSet(object.arrival) ? City.fromJSON(object.arrival) : undefined,
      departureDate: isSet(object.departureDate) ? String(object.departureDate) : "",
    };
  },

  toJSON(message: SearchRoute): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.departure !== undefined) {
      obj.departure = City.toJSON(message.departure);
    }
    if (message.arrival !== undefined) {
      obj.arrival = City.toJSON(message.arrival);
    }
    if (message.departureDate !== "") {
      obj.departureDate = message.departureDate;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SearchRoute>, I>>(base?: I): SearchRoute {
    return SearchRoute.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SearchRoute>, I>>(object: I): SearchRoute {
    const message = createBaseSearchRoute();
    message.id = object.id ?? 0;
    message.departure = (object.departure !== undefined && object.departure !== null)
      ? City.fromPartial(object.departure)
      : undefined;
    message.arrival = (object.arrival !== undefined && object.arrival !== null)
      ? City.fromPartial(object.arrival)
      : undefined;
    message.departureDate = object.departureDate ?? "";
    return message;
  },
};

export type FlightsSearchServiceService = typeof FlightsSearchServiceService;
export const FlightsSearchServiceService = {
  search: {
    path: "/AirfareSearch.FlightsSearchService/search",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SearchRequest) => Buffer.from(SearchRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SearchRequest.decode(value),
    responseSerialize: (value: SearchResponse) => Buffer.from(SearchResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SearchResponse.decode(value),
  },
} as const;

export interface FlightsSearchServiceServer extends UntypedServiceImplementation {
  search: handleUnaryCall<SearchRequest, SearchResponse>;
}

export interface FlightsSearchServiceClient extends Client {
  search(
    request: SearchRequest,
    callback: (error: ServiceError | null, response: SearchResponse) => void,
  ): ClientUnaryCall;
  search(
    request: SearchRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SearchResponse) => void,
  ): ClientUnaryCall;
  search(
    request: SearchRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SearchResponse) => void,
  ): ClientUnaryCall;
}

export const FlightsSearchServiceClient = makeGenericClientConstructor(
  FlightsSearchServiceService,
  "AirfareSearch.FlightsSearchService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): FlightsSearchServiceClient;
  service: typeof FlightsSearchServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
