import Box from "@/components/Box";
import { FlightRouteItem } from "./FlightRouteItem";
import { NewRouteButton } from "./NewRouteButton";
import { useSearchPayload } from "@/store/SearchPayload";
import { SeachRoute } from "@/utils/type";

export default function FlightRouteList() {
  const [payload, dispatch] = useSearchPayload();

  const handleSetRoute = (route: SeachRoute) => {
    dispatch({ type: "updateRoute", data: route });
  };

  return (
    <Box id="flight-route-group" className="px-6 pb-4 items-center" stack>
      <ul className="space-y-2 mb-2">
        {payload.routes.map((route, index) => (
          <FlightRouteItem
            key={route.createTime}
            index={index}
            route={route}
            updateRoute={handleSetRoute}
            deleteRoute={() => {
              dispatch({ type: "deleteRoute", data: route });
            }}
          />
        ))}
      </ul>
      <NewRouteButton />
    </Box>
  );
}
