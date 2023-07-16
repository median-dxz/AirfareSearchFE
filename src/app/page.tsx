import Logo from "@/ui/Logo";
import ResultBox from "@/ui/ResultBox";
import SearchBox from "@/ui/SearchBox";

export default function Main() {
  return (
    <main className="h-full">
      {/* 背景部分 */}
      <div
        id="background-container"
        className="min-h-[50vh] relative w-full flex items-center bg-gradient-to-br from-[#ce9ffc] to-[#7367f0]"
      >
        <Logo />
        <div className="h-[2rem] absolute bottom-[-1rem] w-full rounded-3xl bg-white" />
      </div>
      <div>
      {/* 搜索部分 */}
      <SearchBox />

      {/* 搜索结果部分 */}
      <ResultBox />
      </div>


    </main>
  );
}
