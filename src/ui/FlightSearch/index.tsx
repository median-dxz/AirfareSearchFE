"use client";
import Divider from "@/components/Divider";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import SearchButton from "./SearchButton";
import SearchFilter from "./SearchFilter";
import Box from "@/components/Box";

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
    <Box id="search-form" className="container mx-auto my-[-3rem] items-center space-y-2" stack>
      <Box className="min-h-[4rem] bg-white rounded drop-shadow-xl" stack>
        <SearchFilter />
        <Divider className={"my-2"} />
        <FlightRouteList />
      </Box>
      <SearchButton />
    </Box>
  );
}
