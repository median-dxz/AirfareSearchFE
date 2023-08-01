"use client";

import dynamic from "next/dynamic";

import Box from "@/components/Box";
import Loading from "@/components/Loading";

import { AgencySelect } from "@/ui/AgencySelect";
import { PeopleLimit } from "./PeopleLimit";
import { ResultsLimit } from "./ResultsLimit";
import { SearchButton } from "./SearchButton";

const FlightRouteList = dynamic(() => import("@/ui/FlightRouteList"), {
  ssr: false,
  loading: () => (
    <div className="p-8 w-full flex items-center justify-center">
      <Loading />
      loading...
    </div>
  ),
});

export default function FlightSearch() {
  return (
    <>
      <Box className="min-h-[4rem] bg-white rounded drop-shadow-lg mb-4" stack>
        <Box id="flight-search-filter" stack className="p-2 overflow-hidden text-ellipsis sm:flex-row">
          <PeopleLimit />
          <ResultsLimit />
          <AgencySelect />
        </Box>
        <FlightRouteList />
      </Box>
      <SearchButton />
    </>
  );
}
