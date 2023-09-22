"use client";
import type { SeachRequest } from "@/utils/type";
import dayjs from "dayjs";

export const SearchPayloadHelper = {
  vaildate(payload: SeachRequest) {
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
    if (payload.agencies.length === 0) {
      throw new Error("代理人不能为空, 请至少指定一个代理人");
    }
    if (payload.agencies.length > 20) {
      throw new Error("代理人数量超过限制, 上限为 20 个");
    }
  },
  serialize(payload: SeachRequest) {
    const payloadCopy: SeachRequest = {
      ...payload,
      routes: payload.routes.map((item) => {
        return { ...item, departureDate: dayjs(item.departureDate!).format("YYYYMMDD").toString() as unknown as Date };
      }),
    };
    return JSON.stringify(payloadCopy);
  },
};
