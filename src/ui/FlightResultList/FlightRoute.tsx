import Box from "@/components/Box";
import type { City } from "@/utils/type";
import { stringifyCity } from "@/utils/type";

const Spot = ({ time, city }: { time: string; city: string }) => {
  return (
    <p className="relative">
      {time}
      <span className="absolute text-primary-300 text-sm bottom-[-1.2rem] left-0 w-full text-center">{city}</span>
    </p>
  );
};

export function FlightRoute({
  departure,
  arrival,
  departureTime,
  arrivalTime,
}: {
  departure?: City;
  arrival?: City;
  departureTime: string;
  arrivalTime: string;
}) {
  return (
    <Box className="items-center space-x-4 justify-center text-3xl mt-[-1rem] py-8">
      <Spot city={departure ? stringifyCity(departure) : ""} time={departureTime} />
      <i className="w-[48px] h-0.5 bg-primary-400" />
      <Spot city={arrival ? stringifyCity(arrival) : ""} time={arrivalTime} />
    </Box>
  );
}
