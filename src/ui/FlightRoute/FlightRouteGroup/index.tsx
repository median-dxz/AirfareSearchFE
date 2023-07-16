import AddNewRoute from "./AddNewRoute";
import RouteItem from "./RouteItem";

export default function FlightRouteGroup() {
  return (
    <div id="flight-route-group" className="w-full p-4">
      <ul>
        <RouteItem />
        <AddNewRoute />
      </ul>
    </div>
  );
}
