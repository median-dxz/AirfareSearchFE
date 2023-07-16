import { forwardRef } from "react";
import AgentListItem from "./AgentListItem";
import AgentAddForm from "./AgentAddForm";

export default forwardRef<HTMLUListElement>(function AgentList(props, ref) {
  return (
    <ul ref={ref} className="flex flex-col w-full">
      <AgentListItem />
      <AgentListItem />
      <li className="flex items-center pt-2 border-t-1">
        <AgentAddForm />
      </li>
    </ul>
  );
});
