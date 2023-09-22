import { client } from "@/lib/grpcClient";
import { NextResponse } from "next/server";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";

import type { SearchRequest, SearchResponse } from "@/utils/type";

dayjs.extend(RelativeTime);

export type ApiSearchResponse = SearchResponse & {
  service_endpoint: string;
  time: string;
};

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
            data: res.data,
          };
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
