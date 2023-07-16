"use client";
import Divider from "@/components/Divider";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import SearchButton from "./SearchButton";
import SearchFilter from "./SearchFilter";

const FlightRouteList = dynamic(() => import("./FlightRouteList"), {
  ssr: false,
  loading: () => (
    <div className="p-8 w-full mx-auto text-center">
      <Loading />
      loading...
    </div>
  ),
});

export default function FlightSearch() {
  return (
    <div id="search-form" className="container relative w-full mx-auto my-[-3rem] flex flex-col items-center space-y-2">
      <div className="min-h-[4rem] w-full relative bg-white rounded drop-shadow-xl flex flex-col">
        <SearchFilter />
        <Divider className={"my-2"} />
        <FlightRouteList />
      </div>
      <SearchButton />
    </div>
  );
}
