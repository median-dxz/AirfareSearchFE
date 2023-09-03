"use client";

import dayjs from "dayjs";

import { FlightItem } from "@/components/Result/FlightItem";

import type { Flight } from "@/utils/type";

import { FlightInfo } from "./FlightInfo";
import { FlightNo } from "./FlightNo";
import { FlightRoute } from "./FlightRoute";

interface FlightListProps {
  flights: Flight[];
}

export function FlightList({ flights }: FlightListProps) {
  return (
    <ul className="flex flex-wrap space-y-1">
      {flights.map((flight, index) => (
        <FlightItem key={index}>
          <FlightNo flightNo={flight.flightNo} carrier={flight.carrier} />
          <FlightRoute
            arrival={flight.arrival}
            departure={flight.departure}
            arrivalTime={dayjs(flight.arrivalDatetime).format("hh:mm")}
            departureTime={dayjs(flight.departureDatetime).format("hh:mm")}
          />
          <FlightInfo cabins={flight.cabins} departureDate={dayjs(flight.departureDatetime).format("MM-DD")} />
        </FlightItem>
      ))}
    </ul>
  );
}
