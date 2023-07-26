import type { FlightResult } from "@/utils/type";

export async function seach() {
  const data: FlightResult[] = [
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

  return data;
}
