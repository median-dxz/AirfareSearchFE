import Button from "@/components/Button";
import RouteItem from "@/components/Search/RouteItem";
import { useSearchPayload } from "@/store/SearchPayload";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { CitySelect } from "./CitySelect";
import { DateSelect } from "./DateSelect";

interface FlightRouteItemProps {
  index: number;
}

export function FlightRouteItem({ index }: FlightRouteItemProps) {
  const [payload, dispatch] = useSearchPayload();
  const route = payload.routes[index];

  const handleUpdateDeparture = (value: string) => {
    dispatch({ type: "updateRoute", data: { ...route, departure: value }, index });
  };

  const handleUpdateArrival = (value: string) => {
    dispatch({ type: "updateRoute", data: { ...route, arrival: value }, index });
  };

  const handleUpdateDate = (value: Date) => {
    dispatch({ type: "updateRoute", data: { ...route, departureDate: value }, index });
  };

  const handleDeleteRoute = () => {
    dispatch({ type: "deleteRoute", data: null, index });
  };

  return (
    <RouteItem>
      <span className="inline-block text-slate-900">Route {index} : </span>

      <CitySelect value={route.departure} onChange={handleUpdateDeparture} />

      <ArrowPathIcon className="inline-block w-8 text-primary" />

      <CitySelect value={route.arrival} onChange={handleUpdateArrival} />

      <DateSelect value={route.departureDate} onChange={handleUpdateDate} />

      <Button onClick={handleDeleteRoute} color="secondary" iconOnly>
        <TrashIcon height={16} />
      </Button>
    </RouteItem>
  );
}
