import Box from "@/components/Box";
import Divider from "@/components/Divider";
import { FlightResult } from "@/utils/type";
import PaperAirplaneIcon from "@heroicons/react/24/solid/PaperAirplaneIcon";
import dayjs from "dayjs";

type FdivghtResults = FlightResult[];

export default function FilghtResult() {
  const data: FdivghtResults = [
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
    <Box id="search-result" className="container mx-auto mt-[-3rem] mb-4" stack>
      <Box
        id="search-params"
        className="flex w-full bg-white rounded my-2 shadow-[0_4px_8px_0_rgba(39,36,43,.08)] hover:shadow-[0_4px_8px_0_rgba(39,36,43,.12)] ease transition-[box-shadow] duration-300"
      >
        <h1 className="p-6">搜索结果:</h1>
      </Box>

      <ul className="flex w-full flex-col space-y-2">
        {data.map((result, index) => (
          <li
            key={index}
            className="flex flex-col px-12 py-6 bg-white rounded shadow-[0_4px_8px_0_rgba(39,36,43,.08)] hover:shadow-[0_4px_8px_0_rgba(39,36,43,.12)] ease transition-[box-shadow] duration-300"
          >
            <div className="flex items-center justify-between">
              <span className="relative pt-4">
                <span className="absolute top-0 left-0 font-bold text-xs text-primary">出票代理</span>
                <span className="text-2xl font-bold">{result.agencies.join(", ")}</span>
              </span>
              <span className="font-bold text-2xl float-right">{result.price} ￥</span>
            </div>
            <Divider className="my-2" />
            <ul className="flex flex-wrap -ml-1">
              {result.filghts.map((filght, index) => (
                <li
                  key={index}
                  className="w-full sm:w-[calc((100%-1rem)/4)] p-4 mt-1 ml-1 rounded border-1 hover:border-primary hover:shadow-md transition-[border,box-shadow]"
                >
                  <PaperAirplaneIcon width={24} className="inline text-primary-500 mr-2" />
                  <span className="flight-number">
                    {filght.carrier}
                    {filght.flightNo}
                  </span>
                  <Divider className="my-2" />
                  <div className="flight-city flex items-center justify-stretch space-x-2">
                    <span className="flight-city-departure">{filght.departure}</span>
                    <span> {"->"} </span>
                    <span className="flight-city-arrival">{filght.arrival}</span>
                  </div>
                  <div className="flight-time_elapsed py-2 flex items-center justify-stretch space-x-2">
                    <span className="flight-time-departure">{dayjs(filght.departureDatetime).format("hh:mm")}</span>
                    <span className="flight-time_elapsed-line w-[48px] h-0.5 bg-neutral-200" />
                    <span className="flight-time-arrival">{dayjs(filght.arrivalDatetime).format("hh:mm")}</span>
                  </div>
                  <div className="flight-cabin">舱位: {filght.cabins.join(", ")}</div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Box>
  );
}
