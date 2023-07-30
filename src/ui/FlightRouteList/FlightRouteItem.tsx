import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import RouteItem from "@/components/Search/RouteItem";
import { City, SeachRoute } from "@/utils/type";

import ArrowPathRoundedSquareIcon from "@heroicons/react/24/outline/ArrowPathRoundedSquareIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

import { useState } from "react";
import { CityAutoComplete } from "./CityAutoComplete";

interface FlightRouteItemProps {
  route: SeachRoute;
  updateRoute: (route: SeachRoute) => void;
  deleteRoute: () => void;
  index: number;
}

export function FlightRouteItem({ route, updateRoute, deleteRoute, index }: FlightRouteItemProps) {
  const [arrival, setArrival] = useState<City | null>(route.arrival ?? null);
  const [departure, setDeparture] = useState<City | null>(route.departure ?? null);

  const handleUpdateDeparture = (value?: City) => {
    updateRoute({ ...route, departure: value });
  };

  const handleUpdateArrival = (value?: City) => {
    updateRoute({ ...route, arrival: value });
  };

  const handleUpdateDate = (value: Date) => {
    updateRoute({ ...route, departureDate: value });
  };

  const handleSwapRoute = () => {
    updateRoute({ ...route, departure: route.arrival, arrival: route.departure });
  };

  return (
    <RouteItem>
      <span className="inline-block text-slate-900">Route {index + 1} : </span>

      <CityAutoComplete
      // value={departure}
      // onChange={(evt, city) => {
      //   handleUpdateDeparture(city ?? undefined);
      //   setDeparture(city);
      // }}
      />

      <Button onClick={handleSwapRoute} color="tetriary" iconOnly>
        <ArrowPathRoundedSquareIcon height={24} />
      </Button>

      <CityAutoComplete
      // value={arrival}
      // onChange={(e, city) => {
      //   handleUpdateArrival(city ?? undefined);
      //   setArrival(city);
      // }}
      />

      <DatePicker value={route.departureDate} onChange={handleUpdateDate} />

      <Button onClick={deleteRoute} color="secondary" iconOnly>
        <TrashIcon height={16} />
      </Button>
    </RouteItem>
  );
}
