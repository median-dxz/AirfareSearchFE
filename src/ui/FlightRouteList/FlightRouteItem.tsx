import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import RouteItem from "@/components/Search/RouteItem";

import type { City, SearchRoute } from "@/utils/type";
import { DateFormatter } from "@/utils/type";
import dayjs from "dayjs";

import ArrowPathRoundedSquareIcon from "@heroicons/react/24/outline/ArrowPathRoundedSquareIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

import { CityAutoComplete } from "./CityAutoComplete";
import { useEffect } from "react";

interface FlightRouteItemProps {
  route: SearchRoute;
  updateRoute: (route: SearchRoute) => void;
  deleteRoute: () => void;
  index: number;
  minDate?: Date;
}

export function FlightRouteItem({ route, updateRoute, deleteRoute, index, minDate }: FlightRouteItemProps) {
  useEffect(() => {
    if (minDate && route.departureDate && DateFormatter(route.departureDate).isBefore(minDate)) {
      updateRoute({ ...route, departureDate: dayjs(minDate).format("YYYYMMDD") });
    }
  }, [minDate, route, updateRoute]);

  const handleUpdateDeparture = (value?: City) => {
    updateRoute({ ...route, departure: value });
  };

  const handleUpdateArrival = (value?: City) => {
    updateRoute({ ...route, arrival: value });
  };

  const handleUpdateDate = (value: Date) => {
    updateRoute({ ...route, departureDate: dayjs(value).format("YYYYMMDD") });
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

      <DatePicker value={DateFormatter(route.departureDate).toDate()} onChange={handleUpdateDate} minDate={minDate} />

      <Button onClick={deleteRoute} color="secondary" iconOnly>
        <TrashIcon height={16} />
      </Button>
    </RouteItem>
  );
}
