export async function getCities() {
  return fetch("/config/cities.json").then((r) => r.json());
}
