import AgentSelect from "./AgentSelect";
import PeopleLimit from "./PeopleLimit";
import ResultsLimit from "./ResultsLimit";

export default function SearchFilter() {
  return (
    <div id="flight-router-base" className="flex p-2 overflow-hidden text-ellipsis sm:flex-row flex-col">
      <PeopleLimit />
      <ResultsLimit />
      <AgentSelect />
    </div>
  );
}
