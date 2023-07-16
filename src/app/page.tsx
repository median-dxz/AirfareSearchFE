import Box from "@/components/Box";
import FlightResult from "@/ui/FlightResult";
import FlightSearch from "@/ui/FlightSearch";

export default function Main() {
  return (
    <Box>
      {/* 搜索部分 */}
      <FlightSearch />
      {/* 搜索结果部分 */}
      <FlightResult />
    </Box>
  );
}
