import DatePicker from "@/components/DatePicker";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import PaperAirplaneIcon from "@heroicons/react/24/solid/PaperAirplaneIcon";
import Button from "@/components/Button";
import CitySelector from "./CitySelector";
import ListItem from "./ListItem";

export default function FlightRoute() {
  return (
    <ListItem>
      <span className="m-1 inline-block">
        <CitySelector />
      </span>

      <PaperAirplaneIcon className="w-8 h-8 inline-block" width={24} />

      <span className="m-1 inline-block">
        <CitySelector />
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
