import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import RouteItem from "@/components/Search/RouteItem";
import { City, SeachRoute } from "@/utils/type";

import ArrowPathRoundedSquareIcon from "@heroicons/react/24/outline/ArrowPathRoundedSquareIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

import { CityAutoComplete } from "./CityAutoComplete";
import { useEffect } from "react";

interface FlightRouteItemProps {
  route: SeachRoute;
  updateRoute: (route: SeachRoute) => void;
  deleteRoute: () => void;
  index: number;
  minDate?: Date;
}

export function FlightRouteItem({ route, updateRoute, deleteRoute, index, minDate }: FlightRouteItemProps) {
  useEffect(() => {
    if (minDate && route.departureDate && route.departureDate < minDate) {
      updateRoute({ ...route, departureDate: minDate });
    }
  }, [minDate, route, updateRoute]);

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

      <CityAutoComplete city={route.departure} setCity={handleUpdateDeparture} />

      <Button onClick={handleSwapRoute} color="tetriary" iconOnly>
        <ArrowPathRoundedSquareIcon height={24} />
      </Button>

      <CityAutoComplete city={route.arrival} setCity={handleUpdateArrival} />

      <DatePicker value={route.departureDate} onChange={handleUpdateDate} minDate={minDate} />

      <Button onClick={deleteRoute} color="secondary" iconOnly>
        <TrashIcon height={16} />
      </Button>
    </RouteItem>
  );
}
