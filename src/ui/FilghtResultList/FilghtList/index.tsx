import { FlightItem } from "@/components/Result/FlightItem";
import { Filght } from "@/utils/type";
import dayjs from "dayjs";
import { FilghtInfo } from "./FilghtInfo";
import { FlightNo } from "./FlightNo";
import { FlightRoute } from "./FlightRoute";

interface FilghtListProps {
  filghts: Filght[];
}

export function FilghtList({ filghts }: FilghtListProps) {
  return (
    <ul className="flex flex-wrap space-y-1">
      {filghts.map((flight, index) => (
        <FlightItem key={index}>
          <FlightNo flightNo={flight.flightNo} carrier={flight.carrier} />
          <FlightRoute
            arrival={flight.arrival}
            departure={flight.departure}
            arrivalTime={dayjs(flight.arrivalDatetime).format("hh:mm")}
            departureTime={dayjs(flight.departureDatetime).format("hh:mm")}
          />
          <FilghtInfo cabins={flight.cabins} departureDate={dayjs(flight.departureDatetime).format("MM-DD")} />
        </FlightItem>
      ))}
    </ul>
  );
}
