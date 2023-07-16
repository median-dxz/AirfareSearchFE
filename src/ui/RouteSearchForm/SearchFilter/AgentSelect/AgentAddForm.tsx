import Button from "@/components/Button";
import AutoComplete from "@/components/RouteSearchForm/AutoComplete";

export default function AgentAddForm() {
  return (
    <div>
      <AutoComplete />
      <Button className="mx-1" color="tetriary">
        添加
      </Button>
    </div>
  );
}
