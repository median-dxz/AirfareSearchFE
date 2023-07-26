import PaperAirplaneIcon from "@heroicons/react/24/outline/PaperAirplaneIcon";

export function FlightNo({ carrier, flightNo }: { carrier: string; flightNo: string }) {
  return (
    <div className="flex items-baseline w-fit text-2xl">
      <PaperAirplaneIcon className="w-6 text-primary-400 rotate-[-45deg]" />
      {carrier}
      {flightNo}
    </div>
  );
}
