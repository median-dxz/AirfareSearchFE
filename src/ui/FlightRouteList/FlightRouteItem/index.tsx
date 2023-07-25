import Button from "@/components/Button";
import RouteItem from "@/components/Search/RouteItem";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { CitySelect } from "./CitySelect";
import { DateSelect } from "./DateSelect";

export function FlightRouteItem() {
  return (
    <RouteItem>
      <span className="inline-block">
        <CitySelect />
      </span>

      <ArrowPathIcon className="inline-block w-8 text-primary" />

      <span className="inline-block">
        <CitySelect />
      </span>

      <span className="inline-block">
        <DateSelect />
      </span>

      <Button color="secondary" iconOnly>
        <TrashIcon height={16} />
      </Button>
    </RouteItem>
  );
}
