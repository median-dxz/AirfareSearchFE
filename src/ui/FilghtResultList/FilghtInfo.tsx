import Box from "@/components/Box";
import { CabinIcon } from "@/components/Icon/Cabin";
import { Cabin } from "@/utils/type";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";

const InfoLabel = ({ children }: React.PropsWithChildren) => {
  return <p className="flex items-center w-fit whitespace-nowrap text-primary-500">{children}</p>;
};

export function FilghtInfo({ cabins, departureDate }: { cabins: Cabin[]; departureDate: string }) {
  return (
    <Box className="flex sm:justify-end justify-between sm:w-fit space-x-4">
      <InfoLabel>
        <CalendarIcon className="w-6 mr-2" />
        {departureDate}
      </InfoLabel>

      <InfoLabel>
        <CabinIcon className="w-6 mr-2" />
        {cabins.join(", ")}
      </InfoLabel>
    </Box>
  );
}
