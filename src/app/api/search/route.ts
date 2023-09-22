import { client, type SearchRequest } from "@/lib/grpcClient";
import type { SearchResult } from "@/utils/type";
import { NextResponse } from "next/server";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(RelativeTime);
dayjs.extend(customParseFormat);

export interface ApiSearchResponse {
  service_endpoint: string;
  time: string;
  data: SearchResult[];
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  return NextResponse.redirect(url.origin);
}

export async function POST(request: Request) {
  const body: SearchRequest = await request.json();
  const { AS_SERVICE_URL: SERVICE_URL } = process.env;
  const timeStart = Date.now();

  if (!SERVICE_URL) {
    return new NextResponse("SERVICE_URL is not defined", { status: 500 });
  }

  try {
    const res = await new Promise<ApiSearchResponse>((resolve, reject) => {
      client.search(body, (err, res) => {
        if (err) {
          reject(err);
        } else {
          const apiResponse: ApiSearchResponse = {
            service_endpoint: SERVICE_URL,
            time: dayjs(timeStart).fromNow(),
            data: res.data as unknown as SearchResult[],
          };
          apiResponse.data.forEach((item) => {
            item.flights.forEach((flight) => {
              flight.arrivalDatetime = dayjs(flight.arrivalDatetime as unknown as string, "YYYYMMDDhhmm").toDate();
              flight.departureDatetime = dayjs(flight.departureDatetime as unknown as string, "YYYYMMDDhhmm").toDate();
            });
          });
          resolve(apiResponse);
        }
        reject(err);
      });
    });
    return new NextResponse(JSON.stringify(res), { headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), { status: 500 });
  }
}

// [
//   {
//     agencies: ["BJS001", "CAN001"],
//     flights: [
//       {
//         arrival: { code: "AAA", name: "中国" },
//         departure: { code: "BBB", name: "中国" },
//         arrivalDatetime: new Date(),
//         departureDatetime: new Date(),
//         cabins: ["F", "C"],
//         carrier: "CA",
//         flightNo: "0123",
//       },
//       {
//         arrival: { code: "AAA", name: "中国" },
//         departure: { code: "BBB", name: "中国" },
//         arrivalDatetime: new Date(),
//         departureDatetime: new Date(),
//         cabins: ["F", "C"],
//         carrier: "CA",
//         flightNo: "0123",
//       },
//       {
//         arrival: { code: "AAA", name: "中国" },
//         departure: { code: "BBB", name: "中国" },
//         arrivalDatetime: new Date(),
//         departureDatetime: new Date(),
//         cabins: ["F", "C"],
//         carrier: "CA",
//         flightNo: "0123",
//       },
//       {
//         arrival: { code: "AAA", name: "中国" },
//         departure: { code: "BBB", name: "中国" },
//         arrivalDatetime: new Date(),
//         departureDatetime: new Date(),
//         cabins: ["F", "C"],
//         carrier: "CA",
//         flightNo: "0123",
//       },
//       {
//         arrival: { code: "AAA", name: "中国" },
//         departure: { code: "BBB", name: "中国" },
//         arrivalDatetime: new Date(),
//         departureDatetime: new Date(),
//         cabins: ["F", "C"],
//         carrier: "CA",
//         flightNo: "0123",
//       },
//     ],
//     price: 3200,
//   },
//   {
//     agencies: ["BJS001", "CAN001"],
//     flights: [
//       {
//         arrival: { code: "AAA", name: "中国" },
//         departure: { code: "BBB", name: "中国" },
//         arrivalDatetime: new Date(),
//         departureDatetime: new Date(),
//         cabins: ["F", "C"],
//         carrier: "CA",
//         flightNo: "0123",
//       },
//       {
//         arrival: { code: "AAA", name: "中国" },
//         departure: { code: "BBB", name: "中国" },
//         arrivalDatetime: new Date(),
//         departureDatetime: new Date(),
//         cabins: ["F", "C"],
//         carrier: "CA",
//         flightNo: "0123",
//       },
//     ],
//     price: 3200,
//   },
// ],
