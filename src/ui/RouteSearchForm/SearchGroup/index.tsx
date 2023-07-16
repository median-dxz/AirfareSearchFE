import NewRouteButton from "./NewRouteButton";
import FlightRouteItem from "./FlightRouteItem";

export default function FlightRouteGroup() {
  return (
    <div id="flight-route-group" className="w-full p-2 relative">
      <ul className="space-y-2">
        <FlightRouteItem />
      </ul>
      <NewRouteButton />
    </div>
  );
}
