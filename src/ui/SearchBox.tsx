"use client";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import FlightRouteBase from "./FlightRoute/FlightRouteBase";
// import FlightRouteGroup from "./FlightRoute/FlightRouteGroup";
import dynamic from "next/dynamic";

const FlightRouteGroup = dynamic(() => import("./FlightRoute/FlightRouteGroup"), {
  ssr: false,
});

export default function SearchBox() {
  return (
    <div id="search-box" className="container relative w-full mx-auto my-[-3rem] flex flex-col items-center space-y-2">
      <div className="min-h-[4rem] w-full relative bg-white rounded drop-shadow-xl flex flex-col">
        <FlightRouteBase />
        <Divider className={"my-2"} />
        <FlightRouteGroup />
      </div>
      <Button className="flex items-center justify-around" color="primary">
        <SearchIcon height={24} />
        <span className="mx-2">搜索</span>
      </Button>
    </div>
  );
}
