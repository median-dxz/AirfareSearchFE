import AgentDropDown from "./AgentDropDown";
import PeopleDropDown from "./PeopleDropDown";
import ResultsDropDown from "./ResultsDropDown";

export default function FlightRouteBase() {
  return (
    <div id="flight-router-base" className="flex p-2 overflow-hidden text-ellipsis sm:flex-row flex-col">
      <PeopleDropDown />
      <ResultsDropDown />
      <AgentDropDown />
    </div>
  );
}
