import ResultBox from "@/ui/RouteResultList";
import SearchBox from "@/ui/RouteSearchForm/SearchBox";

export default function Main() {
  return (
    <div>
      {/* 搜索部分 */}
      <SearchBox />
      {/* 搜索结果部分 */}
      <ResultBox />
    </div>
  );
}
