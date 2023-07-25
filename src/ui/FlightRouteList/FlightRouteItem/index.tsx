import Button from "@/components/Button";
import RouteItem from "@/components/Search/RouteItem";
import PaperAirplaneIcon from "@heroicons/react/24/outline/PaperAirplaneIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { CitySelect } from "./CitySelect";
import { DateSelect } from "./DateSelect";

export function FlightRouteItem() {
  return (
    <RouteItem>
      <span className="m-1 inline-block">
        <CitySelect />
      </span>

      <span className="inline-block w-8 text-primary">
        <PaperAirplaneIcon />
      </span>

      <span className="m-1 inline-block">
        <CitySelect />
      </span>

      <span className="m-1 inline-block">
        <DateSelect />
      </span>

      <Button color="secondary" iconOnly className="m-2">
        <TrashIcon height={16} />
      </Button>
    </RouteItem>
  );
}
