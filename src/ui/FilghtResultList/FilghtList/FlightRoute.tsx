import Box from "@/components/Box";

const Spot = ({ time, city }: { time: string; city: string }) => {
  return (
    <span className="relative">
      {time}
      <span className="absolute text-primary-300 text-sm bottom-[-1.2rem] left-0 w-full text-center">{city}</span>
    </span>
  );
};

export function FlightRoute({
  departure,
  arrival,
  departureTime,
  arrivalTime,
}: {
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
}) {
  return (
    <Box className="items-center space-x-4 justify-center text-3xl mt-[-1rem] py-8">
      <Spot city={departure} time={departureTime} />
      <span className="w-[48px] h-0.5 bg-primary-400" />
      <Spot city={arrival} time={arrivalTime} />
    </Box>
  );
}
