import Agent from "./Agent";
import People from "./People";
import Results from "./Results";

export default function FlightRouteBase() {
  return (
    <div id="flight-router-base" className="flex p-2 overflow-hidden text-ellipsis sm:flex-row flex-col">
      <People />
      <Results />
      <Agent />
    </div>
  );
}
