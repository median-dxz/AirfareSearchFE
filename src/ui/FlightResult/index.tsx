"use client";

import useSWR from "swr";

import { useRouter } from "next/navigation";

import { FlightResultList } from "@/ui/FlightResultList";

import Loading from "@/components/Loading";
import { useSearchPayload } from "@/store/SearchPayload";
import { SearchPayloadHelper } from "@/store/SearchPayloadHelper";
import type { ApiSearchResponse } from "@/app/api/search/route";
import { useEffect } from "react";

const fetchData = async (payload: string) => {
  const res = await fetch("/api/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });

  if (res.status != 200) {
    const errHint = await res.text();
    throw Error(`${res.status} ${res.statusText}\n ${errHint}`);
  }

  return res.json() as Promise<ApiSearchResponse>;
};

export default function FlightResult() {
  const [payload] = useSearchPayload();
  const router = useRouter();
  let payloadValid: boolean;

  try {
    SearchPayloadHelper.vaildate(payload);
    payloadValid = true;
  } catch (e) {
    payloadValid = false;
  }

  useEffect(() => {
    if (payloadValid === false) {
      router.push("/");
    }
  }, [router, payloadValid]);

  const {
    data: result,
    isLoading,
    error,
  } = useSWR(payloadValid ? SearchPayloadHelper.serialize(payload) : null, fetchData);

  if (error) {
    // console.error(error);
    return (
      <div className="flex flex-col p-12 bg-white justify-center items-center shadow-md">
        <div className="mx-2">
          搜索失败:
          {error instanceof Error
            ? error.stack?.split("\n").map((str, index) => {
                return <p key={index}>{str}</p>;
              })
            : String(error)}
        </div>
      </div>
    );
  }

  if (isLoading || !result) {
    return (
      <div className="flex p-12 bg-white justify-center items-center shadow-md">
        <Loading /> <p className="mx-2">请求服务中...</p>
      </div>
    );
  }

  return (
    <>
      <FlightResultList results={result.data} />
      <div className="mt-2 p-6 bg-secondary-50 text-sm shadow-md">
        <p>后端服务地址：{result.service_endpoint}</p>
        <p>请求信息: {JSON.stringify(payload)}</p>
        <p>原始返回: {JSON.stringify(result)}</p>
        <p>结果数: {result.data.length}</p>
        <p>用时: {result.time} ms</p>
      </div>
    </>
  );
}
