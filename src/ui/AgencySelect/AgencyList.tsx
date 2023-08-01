import { HTMLAttributes, forwardRef } from "react";

import Box from "@/components/Box";
import Button from "@/components/Button";

import MinusCircleIcon from "@heroicons/react/24/outline/MinusCircleIcon";
import GlobeAltIcon from "@heroicons/react/24/outline/GlobeAltIcon";

import { useSearchPayload } from "@/store/SearchPayload";

export const AgencyList = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(function AgentList(
  { ...props },
  ref
) {
  const [payload, dispatch] = useSearchPayload();
  const { agencies } = payload;
  return (
    <ul ref={ref} className="w-full" {...props}>
      {agencies.map((agency) => (
        <ListItem
          key={agency}
          agency={agency}
          deleteAgency={() => {
            dispatch({ type: "setAgencies", data: agencies.filter((v) => v !== agency) });
          }}
        />
      ))}
    </ul>
  );
});

interface ListItemProps {
  agency: string;
  deleteAgency: () => void;
}

export function ListItem({ agency, deleteAgency }: ListItemProps) {
  return (
    <li className="flex w-full items-center justify-between px-4 py-1 text-sm text-secondary-900 hover:bg-blue-50">
      <Box className="items-center space-x-2">
        <GlobeAltIcon className="flex-none w-5" />
        <p className="text-base">{agency}</p>
      </Box>
      <Button
        color="tetriary"
        onClick={() => {
          deleteAgency();
        }}
        iconOnly
      >
        <MinusCircleIcon className="text-red-400" height={16} />
      </Button>
    </li>
  );
}
