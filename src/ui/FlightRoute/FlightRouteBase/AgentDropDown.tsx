import TicketIcon from "@heroicons/react/24/outline/TicketIcon";
import DropDownButton from "./DropDownButton";
import AgentList from "./AgentList";

export default function AgentDropDown() {
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
