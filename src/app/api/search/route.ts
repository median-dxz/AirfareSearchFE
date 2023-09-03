import type { SearchResult } from "@/utils/type";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.redirect("/");
}

export async function POST(request: Request) {
  const body = await request.json();

  const { AS_SERVICE_URL: SERVICE_URL } = process.env;

  const data: SearchResult = {
    service: String(SERVICE_URL),
    time: 2000,
    data: [
      {
        agencies: ["BJS001", "CAN001"],
        flights: [
          {
            arrival: { code: "AAA", name: "中国" },
            departure: { code: "BBB", name: "中国" },
            arrivalDatetime: new Date(),
            departureDatetime: new Date(),
            cabins: ["F", "C"],
            carrier: "CA",
            flightNo: "0123",
          },
          {
            arrival: { code: "AAA", name: "中国" },
            departure: { code: "BBB", name: "中国" },
            arrivalDatetime: new Date(),
            departureDatetime: new Date(),
            cabins: ["F", "C"],
            carrier: "CA",
            flightNo: "0123",
          },
          {
            arrival: { code: "AAA", name: "中国" },
            departure: { code: "BBB", name: "中国" },
            arrivalDatetime: new Date(),
            departureDatetime: new Date(),
            cabins: ["F", "C"],
            carrier: "CA",
            flightNo: "0123",
          },
          {
            arrival: { code: "AAA", name: "中国" },
            departure: { code: "BBB", name: "中国" },
            arrivalDatetime: new Date(),
            departureDatetime: new Date(),
            cabins: ["F", "C"],
            carrier: "CA",
            flightNo: "0123",
          },
          {
            arrival: { code: "AAA", name: "中国" },
            departure: { code: "BBB", name: "中国" },
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
        flights: [
          {
            arrival: { code: "AAA", name: "中国" },
            departure: { code: "BBB", name: "中国" },
            arrivalDatetime: new Date(),
            departureDatetime: new Date(),
            cabins: ["F", "C"],
            carrier: "CA",
            flightNo: "0123",
          },
          {
            arrival: { code: "AAA", name: "中国" },
            departure: { code: "BBB", name: "中国" },
            arrivalDatetime: new Date(),
            departureDatetime: new Date(),
            cabins: ["F", "C"],
            carrier: "CA",
            flightNo: "0123",
          },
        ],
        price: 3200,
      },
    ],
  };
  await new Promise((res) => setTimeout(res, 2000));
  return NextResponse.json(data);
}
