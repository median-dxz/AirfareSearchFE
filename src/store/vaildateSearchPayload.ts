"use client";
import type { SeachPayloadStore } from "./SearchPayload";

export function vaildateSearchPayload(payload: SeachPayloadStore) {
  if (payload.routes.some((route) => !(route.arrival && route.departure))) {
    throw new Error("城市不能为空");
  }
  if (payload.routes.some((route) => route.arrival === route.departure)) {
    throw new Error("出发城市和到达城市不能相同");
  }
  if (payload.routes.some((route) => !route.departureDate)) {
    throw new Error("出发日期不能为空");
  }
  for (let i = 0; i < payload.routes.length - 1; i++) {
    if (payload.routes[i].departureDate! > payload.routes[i + 1].departureDate!) {
      throw new Error("后面行程的出发日期不能小于之前的行程");
    }
  }
  if (payload.routes.length === 0) {
    throw new Error("未添加任何航程");
  }
}
