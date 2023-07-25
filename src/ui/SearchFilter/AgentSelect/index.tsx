import Box from "@/components/Box";
import DropDownButton from "@/components/Search/DropDownButton";
import TicketIcon from "@heroicons/react/24/outline/TicketIcon";
import { AgencyList } from "./AgencyList";
import { AgentSelectForm } from "./AgentSelectForm";

export function AgentSelect() {
  return (
    <DropDownButton
      buttonContent={
        <>
          <TicketIcon width={18} />
          <span>代理人: {20}</span>
        </>
      }
    >
      <Box stack>
        <AgencyList />
        <AgentSelectForm />
      </Box>
    </DropDownButton>
  );
}
