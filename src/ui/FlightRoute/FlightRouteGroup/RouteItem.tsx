import DatePicker from "@/components/DatePicker";
import CitySelector from "./CitySelector";
import PaperAirplaneIcon from "@heroicons/react/24/outline/PaperAirplaneIcon";

export default function RouteItem() {
  return (
    <li className="flex items-center justify-center space-x-2 [&>*]:whitespace-nowrap [&>svg]:text-primary sm:flex-row flex-col">
      <span>出发城市: </span>
      <CitySelector />

      <PaperAirplaneIcon height={24} />

      <span>到达城市: </span>
      <CitySelector />

      <span>出发日期: </span>
      <DatePicker />
    </li>
  );
}
