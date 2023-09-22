import Box from "@/components/Box";

import { FlightRouteItem } from "./FlightRouteItem";
import { NewRouteButton } from "./NewRouteButton";

import { useSearchPayload } from "@/store/SearchPayload";
import type { SearchRoute } from "@/utils/type";
import { DateFormatter } from "@/utils/type";

export default function FlightRouteList() {
  const [payload, dispatch] = useSearchPayload();

  const handleSetRoute = (route: SearchRoute) => {
    dispatch({ type: "updateRoute", data: route });
  };

  const getMinDate = (index: number) => {
    if (index <= 0) return undefined;
    const date = payload.routes.at(index - 1)?.departureDate;
    return date ? DateFormatter(date).toDate() : undefined;
  };

  return (
    <Box id="flight-route-group" className="px-6 pb-4 items-center" stack>
      <ul className="w-full space-y-2 mb-2">
        {payload.routes.map((route, index) => (
          <FlightRouteItem
            key={route.id}
            index={index}
            route={route}
            updateRoute={handleSetRoute}
            minDate={getMinDate(index)}
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
