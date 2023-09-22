export async function getAgencies(): Promise<string[]> {
  return fetch("/config/agencies.json").then((r) => r.json());
}
