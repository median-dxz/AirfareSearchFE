import Box from "@/components/Box";
import { FlightRouteItem } from "./FlightRouteItem";
import { NewRouteButton } from "./NewRouteButton";
import { useSearchPayload } from "@/store/SearchPayload";

export default function FlightRouteList() {
  const [payload] = useSearchPayload();

  return (
    <Box id="flight-route-group" className="px-6 py-4 items-center" stack>
      <ul className="space-y-2 mb-2">
        {payload.routes.map((route, index) => (
          <FlightRouteItem key={index} index={index} />
        ))}
      </ul>
      <NewRouteButton />
    </Box>
  );
}
