import Button from "@/components/Button";
import { forwardRef } from "react";
import AgentAutoComplete from "./AgentAutoComplete";
import AgentListItem from "./AgentListItem";

export default forwardRef<HTMLUListElement>(function AgentList(props, ref) {
  return (
    <ul ref={ref} className="flex flex-col w-full">
      <AgentListItem />
      <AgentListItem />
      <li className="flex items-center pt-2 border-t-1">
        <AgentAutoComplete />
        <Button className="mx-1" color="tetriary">
          添加
        </Button>
      </li>
    </ul>
  );
});
