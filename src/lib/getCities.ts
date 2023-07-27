import { City } from "@/utils/type";

export async function getCities(): Promise<City[]> {
  return fetch("/config/cities.json").then((r) => r.json());
}
