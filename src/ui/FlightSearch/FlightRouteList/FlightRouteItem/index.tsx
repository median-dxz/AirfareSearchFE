import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import ListItem from "@/components/FlightSearch/ListItem";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PaperAirplaneIcon from "@heroicons/react/24/solid/PaperAirplaneIcon";
import CitySelect from "./CitySelect";

export default function FlightRouteItem() {
  return (
    <ListItem>
      <span className="m-1 inline-block">
        <CitySelect />
      </span>

      <PaperAirplaneIcon className="w-8 h-8 inline-block" width={24} />

      <span className="m-1 inline-block">
        <CitySelect />
      </span>

      <span className="m-1 inline-block">
        <DatePicker />
      </span>

      <Button color="secondary" iconOnly className="m-2">
        <TrashIcon height={16} />
      </Button>
    </ListItem>
  );
}
