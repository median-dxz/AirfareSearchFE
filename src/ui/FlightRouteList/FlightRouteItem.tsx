import Button from "@/components/Button";
import RouteItem from "@/components/Search/RouteItem";
import { City, SeachRoute } from "@/utils/type";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { CitySelect } from "./CitySelect";
import { CityAutoComplete } from "./SelectorWithFilter";
import DatePicker from "@/components/DatePicker";

interface FlightRouteItemProps {
  route: SeachRoute;
  updateRoute: (route: SeachRoute) => void;
  deleteRoute: () => void;
  index: number;
}

export function FlightRouteItem({ route, updateRoute, deleteRoute, index }: FlightRouteItemProps) {
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

      <CitySelect value={route.departure} onSelect={handleUpdateDeparture} />

      <Button onClick={handleSwapRoute} color="tetriary" iconOnly>
        <ArrowPathIcon height={24} />
      </Button>

      <CitySelect value={route.arrival} onSelect={handleUpdateArrival} />
      {/* <CityAutoComplete value={route.arrival} onSelect={handleUpdateArrival} /> */}

      <DatePicker value={route.departureDate} onChange={handleUpdateDate} />

      <Button onClick={deleteRoute} color="secondary" iconOnly>
        <TrashIcon height={16} />
      </Button>
    </RouteItem>
  );
}
