import Divider from "@/components/Divider";
import AgentListItem from "./AgentListItem";
import AgentAutoComplete from "./AgentAutoComplete";
import Button from "@/components/Button";

export default function AgentList() {
  return (
    <ul className="flex flex-col w-full">
      <AgentListItem />
      <AgentListItem />
      <Divider />
      <div className="flex items-center">
        <AgentAutoComplete />
        <Button color="tetriary">添加</Button>
      </div>
    </ul>
  );
}
