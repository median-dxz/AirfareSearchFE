import Box from "@/components/Box";
import { FlightResult } from "@/utils/type";
import FilghtResultList from "./FilghtResultList";

type FlightResults = FlightResult[];

export default function FilghtResult() {
  const data: FlightResults = [
    {
      agencies: ["BJS001", "CAN001"],
      filghts: [
        {
          arrival: "AAA",
          departure: "BBB",
          arrivalDatetime: new Date(),
          departureDatetime: new Date(),
          cabins: ["F", "C"],
          carrier: "CA",
          flightNo: "0123",
        },
        {
          arrival: "AAA",
          departure: "BBB",
          arrivalDatetime: new Date(),
          departureDatetime: new Date(),
          cabins: ["F", "C"],
          carrier: "CA",
          flightNo: "0123",
        },
        {
          arrival: "AAA",
          departure: "BBB",
          arrivalDatetime: new Date(),
          departureDatetime: new Date(),
          cabins: ["F", "C"],
          carrier: "CA",
          flightNo: "0123",
        },
        {
          arrival: "AAA",
          departure: "BBB",
          arrivalDatetime: new Date(),
          departureDatetime: new Date(),
          cabins: ["F", "C"],
          carrier: "CA",
          flightNo: "0123",
        },
        {
          arrival: "AAA",
          departure: "BBB",
          arrivalDatetime: new Date(),
          departureDatetime: new Date(),
          cabins: ["F", "C"],
          carrier: "CA",
          flightNo: "0123",
        },
      ],
      price: 3200,
    },
    {
      agencies: ["BJS001", "CAN001"],
      filghts: [
        {
          arrival: "AAA",
          departure: "BBB",
          arrivalDatetime: new Date(),
          departureDatetime: new Date(),
          cabins: ["F", "C"],
          carrier: "CA",
          flightNo: "0123",
        },
        {
          arrival: "AAA",
          departure: "BBB",
          arrivalDatetime: new Date(),
          departureDatetime: new Date(),
          cabins: ["F", "C"],
          carrier: "CA",
          flightNo: "0123",
        },
      ],
      price: 3200,
    },
  ];
  return (
    <Box id="search-result" className="container mx-auto" stack>
      <Box id="search-params" className="bg-white my-2 shadow-container">
        <h1 className="p-6">搜索结果:</h1>
      </Box>
      <FilghtResultList data={data} />
    </Box>
  );
}
