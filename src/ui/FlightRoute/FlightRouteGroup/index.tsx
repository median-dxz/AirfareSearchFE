import AddNewRoute from "./AddNewRoute";
import FlightRoute from "./FlightRoute";

export default function FlightRouteGroup() {
  return (
    <div id="flight-route-group" className="w-full p-2 relative">
      <ul className="space-y-2">
        <FlightRoute />
        <AddNewRoute />
      </ul>
    </div>
  );
}
