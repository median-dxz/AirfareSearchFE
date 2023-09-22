"use client";
import type { Flight } from "@/utils/type";

import { DateTimeFormatter } from "@/utils/type";

import { FlightItem } from "@/components/Result/FlightItem";
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
            arrival={flight.arrival!}
            departure={flight.departure!}
            arrivalTime={DateTimeFormatter(flight.arrivalDatetime).format("hh:mm")}
            departureTime={DateTimeFormatter(flight.departureDatetime).format("hh:mm")}
          />
          <FlightInfo
            cabins={flight.cabins}
            departureDate={DateTimeFormatter(flight.departureDatetime).format("MM-DD")}
          />
        </FlightItem>
      ))}
    </ul>
  );
}
