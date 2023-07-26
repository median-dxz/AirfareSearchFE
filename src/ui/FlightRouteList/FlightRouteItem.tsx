import Button from "@/components/Button";
import RouteItem from "@/components/Search/RouteItem";
import { SeachRoute } from "@/utils/type";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { CitySelect } from "./CitySelect";
import { DateSelect } from "./DateSelect";

interface FlightRouteItemProps {
  route: SeachRoute;
  updateRoute: (route: SeachRoute) => void;
  deleteRoute: () => void;
  index: number;
}

export function FlightRouteItem({ route, updateRoute, deleteRoute, index }: FlightRouteItemProps) {
  const handleUpdateDeparture = (value: string) => {
    updateRoute({ ...route, departure: value });
  };

  const handleUpdateArrival = (value: string) => {
    updateRoute({ ...route, arrival: value });
  };

  const handleUpdateDate = (value: Date) => {
    updateRoute({ ...route, departureDate: value });
  };

  return (
    <RouteItem>
      <span className="inline-block text-slate-900">Route {index + 1} : </span>

      <CitySelect value={route.departure} onChange={handleUpdateDeparture} />

      <ArrowPathIcon className="inline-block w-8 text-primary" />

      <CitySelect value={route.arrival} onChange={handleUpdateArrival} />

      <DateSelect value={route.departureDate} onChange={handleUpdateDate} />

      <Button onClick={deleteRoute} color="secondary" iconOnly>
        <TrashIcon height={16} />
      </Button>
    </RouteItem>
  );
}
