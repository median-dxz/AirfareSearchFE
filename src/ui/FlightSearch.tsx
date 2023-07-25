"use client";
import Box from "@/components/Box";
import Loading from "@/components/Loading";

import SearchButton from "@/components/Search/SearchButton";

import SearchFilter from "@/ui/SearchFilter";

import dynamic from "next/dynamic";

const FlightRouteList = dynamic(() => import("@/ui/FlightRouteList"), {
  ssr: false,
  loading: () => (
    <div className="p-8 w-full mx-auto text-center">
      <Loading />
      loading...
    </div>
  ),
});

export default function FlightSearch() {
  // useStore
  return (
    <Box id="search-form" className="container mx-auto my-[-3rem] items-center space-y-2 pb-4" stack>
      <Box className="min-h-[4rem] bg-white rounded drop-shadow-lg mb-4" stack>
        {/* provider */}
        <SearchFilter />
        <FlightRouteList />
      </Box>
      <SearchButton />
    </Box>
  );
}