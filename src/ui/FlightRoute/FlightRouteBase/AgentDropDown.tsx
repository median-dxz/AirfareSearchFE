import TicketIcon from "@heroicons/react/24/outline/TicketIcon";
import DropDownButton from "./DropDownButton";

export default function AgentDropDown() {
  return (
    <DropDownButton
      buttonContent={
        <>
          <TicketIcon width={18} />
          <span>代理: {20}</span>
        </>
      }
    >
      {}
    </DropDownButton>
  );
}
