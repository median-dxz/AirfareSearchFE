import Box from "@/components/Box";
import Divider from "@/components/Divider";
import { FlightResult } from "@/utils/type";
import PaperAirplaneIcon from "@heroicons/react/24/outline/PaperAirplaneIcon";
import CalendarIcon from "@heroicons/react/24/outline/CalendarIcon";
import dayjs from "dayjs";
import Logo from "@/ui/Logo";

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
    <main className="min-h-[100vh] flex flex-col bg-gradient-to-br from-[#ce9ffc] to-[#7367f0]">
      <Logo />
      <Box id="search-result" className="container mx-auto" stack>
        <Box
          id="search-params"
          className="flex w-full bg-white bg-opacity-80 rounded my-2 shadow-[0_4px_8px_0_rgba(39,36,43,.08)] hover:shadow-[0_4px_8px_0_rgba(39,36,43,.12)] ease transition-[box-shadow] duration-300"
        >
          <h1 className="p-6">搜索结果:</h1>
        </Box>

        <ul className="flex w-full flex-col space-y-2">
          {data.map((result, index) => (
            <li
              key={index}
              className="flex flex-col px-12 py-6 bg-opacity-80 bg-white backdrop-blur-sm rounded shadow-[0_4px_8px_0_rgba(39,36,43,.08)] hover:shadow-[0_4px_8px_0_rgba(39,36,43,.12)] ease transition-[box-shadow] duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="relative pt-4">
                  <span className="absolute top-0 left-0 font-bold text-xs text-primary">出票代理</span>
                  <span className="text-2xl font-bold">{result.agencies.join(", ")}</span>
                </span>
                <span className="font-bold text-2xl float-right whitespace-nowrap">{result.price} ￥</span>
              </div>
              <ul className="flex flex-wrap space-y-1 mt-4">
                {result.filghts.map((filght, index) => (
                  <li
                    key={index}
                    className="w-full flex items-center justify-between px-6 py-4 rounded hover:bg-sky-200 transition-[all] sm:flex-row flex-col border-b-primary-50"
                  >
                    <Box className="items-baseline w-fit py-4 text-xl">
                      <PaperAirplaneIcon className="inline w-6 text-primary-400 rotate-[-45deg]" />
                      <span className="flight-number text-primary-800 font-bold">
                        {filght.carrier}
                        {filght.flightNo}
                      </span>
                    </Box>

                    <Box className="items-center space-x-4 mt-[-1rem] justify-center text-3xl py-4">
                      <span className="flight-time-departure relative">
                        {dayjs(filght.departureDatetime).format("hh:mm")}
                        <span className="flight-city-departure absolute text-primary-500 text-sm bottom-[-1.2rem] left-0 w-full text-center">
                          {filght.departure}
                        </span>
                      </span>
                      <span className="flight-time_elapsed-line w-[48px] h-0.5 bg-primary-400" />
                      <span className="flight-time-arrival relative">
                        {dayjs(filght.arrivalDatetime).format("hh:mm")}
                        <span className="flight-city-arrival absolute text-primary-500 text-sm bottom-[-1.2rem] left-0 w-full text-center">
                          {filght.arrival}
                        </span>
                      </span>
                    </Box>

                    <Box className="items-center w-fit whitespace-nowrap p-2 text-primary-500">
                      <CalendarIcon className="w-6" />
                      <span className="ml-2">{dayjs(filght.departureDatetime).format("MM-DD")}</span>
                    </Box>

                    <Box className="items-center w-fit whitespace-nowrap p-2 text-primary-500">
                      <svg width={24} height={24} viewBox="0 0 24 24" style={{ fill: "rgb(101 144 213)" }}>
                        <path
                          xmlns="http://www.w3.org/2000/svg"
                          d="M20,8V6c0-1.65-1.35-3-3-3H7C5.35,3,4,4.35,4,6v2c-1.65,0-3,1.35-3,3v5c0,1.65,1.35,3,3,3v1c0,0.55,0.45,1,1,1 c0.55,0,1-0.45,1-1v-1h12v1c0,0.55,0.45,1,1,1c0.55,0,1-0.45,1-1v-1c1.65,0,3-1.35,3-3v-5C23,9.35,21.65,8,20,8z M6,6 c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1v2.78c-0.61,0.55-1,1.34-1,2.22v2H7v-2c0-0.88-0.39-1.67-1-2.22V6z M21,16 c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1v-5c0-0.55,0.45-1,1-1s1,0.45,1,1v4h14v-4c0-0.55,0.45-1,1-1s1,0.45,1,1V16z"
                        />
                      </svg>
                      <span className="ml-2">{filght.cabins.join(", ")}</span>
                    </Box>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Box>
    </main>
  );
}
