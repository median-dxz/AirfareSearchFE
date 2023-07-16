import { forwardRef } from "react";
import AgentListItem from "./AgentListItem";

export default forwardRef<HTMLUListElement>(function AgentList(props, ref) {
  return (
    <ul ref={ref} className="w-full">
      <AgentListItem />
      <AgentListItem />
    </ul>
  );
});
