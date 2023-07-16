import NewRouteButton from "./NewRouteButton";
import FlightRouteItem from "./FlightRouteItem";
import Box from "@/components/Box";

export default function FlightRouteList() {
  return (
    <Box id="flight-route-group" className="p-2" stack>
      <ul className="space-y-2 mb-2">
        <FlightRouteItem />
      </ul>
      <NewRouteButton />
    </Box>
  );
}
