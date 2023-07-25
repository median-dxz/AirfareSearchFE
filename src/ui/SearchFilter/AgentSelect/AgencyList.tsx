import { forwardRef } from "react";
import Box from "@/components/Box";
import Button from "@/components/Button";
import MinusCircleIcon from "@heroicons/react/24/outline/MinusCircleIcon";


export const AgencyList = forwardRef<HTMLUListElement>(function AgentList(props, ref) {
  return (
    <ul ref={ref} className="w-full">
      <ListItem />
      <ListItem />
    </ul>
  );
});

export function ListItem() {
  return (
    <li className="flex w-full items-center justify-between px-4 py-1 text-sm text-secondary-900 hover:bg-secondary-50">
      <Box>
        icon <span>代理商</span>
      </Box>
      <Button color="tetriary" iconOnly>
        <MinusCircleIcon className="text-red-400" height={16} />
      </Button>
    </li>
  );
}
