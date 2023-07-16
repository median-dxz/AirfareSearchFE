import FlightResultList from "@/ui/FlightResultList";
import FlightSearchForm from "@/ui/FlightSearchForm";

export default function Main() {
  return (
    <div>
      {/* 搜索部分 */}
      <FlightSearchForm />
      {/* 搜索结果部分 */}
      <FlightResultList />
    </div>
  );
}
