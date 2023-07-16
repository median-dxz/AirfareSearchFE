import DropDownButton from "@/components/FlightSearch/DropDownButton";
import TicketIcon from "@heroicons/react/24/outline/TicketIcon";
import AgentList from "./AgentList";

export default function AgentSelect() {
  return (
    <DropDownButton
      buttonContent={
        <>
          <TicketIcon width={18} />
          <span>代理人: {20}</span>
        </>
      }
    >
      <AgentList />
    </DropDownButton>
  );
}
