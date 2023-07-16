import Box from "@/components/Box";
import AgentSelect from "./AgentSelect";
import PeopleLimit from "./PeopleLimit";
import ResultsLimit from "./ResultsLimit";

export default function SearchFilter() {
  return (
    <Box id="flight-router-base" stack className="p-2 overflow-hidden text-ellipsis sm:flex-row">
      <PeopleLimit />
      <ResultsLimit />
      <AgentSelect />
    </Box>
  );
}
