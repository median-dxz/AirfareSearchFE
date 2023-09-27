import type { FlightResult } from "@/utils/type";

import { ResultItem } from "@/components/Result/ResultItem";
import { useCities } from "@/store/CitiesStore";
import { FlightList } from "./FlightList";

function ResultHeader({ agencies, price }: { agencies: string[]; price: number }) {
  return (
    <div className="flex justify-between px-6 py-4 text-2xl font-bold">
      <p className="relative pt-4">
        <span className="absolute top-0 left-0 font-bold text-xs text-primary">出票代理</span>
        {agencies.join(", ")}
      </p>
      <p className="pt-4 whitespace-nowrap">{price} ￥</p>
    </div>
  );
}

interface FlightResultListProps {
  results: FlightResult[];
}

export function FlightResultList({ results }: FlightResultListProps) {
  const cities = useCities();
  for (const item of results) {
    for (const flight of item.flights) {
      flight.departure && (flight.departure.name = String(cities.get(flight.departure.code)));
      flight.arrival && (flight.arrival.name = String(cities.get(flight.arrival.name)));
    }
  }

  return (
    <ul className="w-full flex flex-col space-y-2">
      {results.map((result, index) => (
        <ResultItem key={index}>
          <ResultHeader agencies={result.agencies} price={result.price} />
          <FlightList flights={result.flights} />
        </ResultItem>
      ))}
    </ul>
  );
}
