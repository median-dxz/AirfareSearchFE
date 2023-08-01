import type { SeachPayloadStore } from "@/store/SearchPayload";
import type { SearchResult } from "@/utils/type";

export async function search(payload: SeachPayloadStore) {
  const data: SearchResult = {
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
  return data;
}
