import Box from "@/components/Box";
import Button from "@/components/Button";
import AutoComplete from "@/components/Search/AutoComplete";

export function AgentSelectForm() {
  return (
    <Box className="items-center pt-2 pl-2">
      <AutoComplete options={[]} />
      <Button className="mx-1" color="tetriary">
        添加
      </Button>
    </Box>
  );
}
