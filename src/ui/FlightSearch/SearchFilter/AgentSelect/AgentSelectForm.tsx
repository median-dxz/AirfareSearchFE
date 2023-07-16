import Box from "@/components/Box";
import Button from "@/components/Button";
import AutoComplete from "@/components/FlightSearch/AutoComplete";

export default function AgentSelectForm() {
  return (
    <Box className="items-center pt-2 border-t-1">
      <AutoComplete />
      <Button className="mx-1" color="tetriary">
        添加
      </Button>
    </Box>
  );
}
