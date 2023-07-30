import Box from "@/components/Box";
import DropDownButton from "@/components/Search/DropDownButton";
import TicketIcon from "@heroicons/react/24/outline/TicketIcon";

import { AgencyList } from "./AgencyList";
import { AgencySelectForm } from "./AgentSelectForm";
import { useSearchPayload } from "@/store/SearchPayload";

export function AgencySelect() {
  const [payload] = useSearchPayload();
  const { agencies } = payload;

  return (
    <DropDownButton
      buttonContent={
        <>
          <TicketIcon className="flex-none w-5" />
          <span className="overflow-hidden text-ellipsis">
            代理人: {agencies.length ? agencies.join(", ") : "全部"}
          </span>
        </>
      }
    >
      <Box stack>
        <AgencyList />
        <AgencySelectForm />
      </Box>
    </DropDownButton>
  );
}
