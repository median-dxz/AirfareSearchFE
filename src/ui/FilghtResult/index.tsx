"use client";

import useSWR from "swr";

import Loading from "@/components/Loading";
import { useSearchPayload } from "@/store/SearchPayload";

import { FilghtResultList } from "@/ui/FilghtResultList";
import { SearchResult } from "@/utils/type";
import { vaildateSearchPayload } from "@/store/vaildateSearchPayload";
import { useRouter } from "next/navigation";

export default function FilghtResult() {
  const [payload] = useSearchPayload();
  const router = useRouter();
  let payloadValid = false;

  try {
    vaildateSearchPayload(payload);
    payloadValid = true;
  } catch (e) {
    router.push("/");
  }

  const {
    data: result,
    isLoading,
    error,
  } = useSWR(payloadValid ? JSON.stringify(payload) : null, async (payload: string) => {
    const res = await fetch("/api/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });

    if (res.status != 200) {
      throw Error(`${res.status} ${res.statusText}`);
    }

    return res.json() as Promise<SearchResult>;
  });

  if (error) {
    console.error(error);

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
      <FilghtResultList results={result.data} />
      <div className="mt-2 p-6 bg-secondary-50 text-sm shadow-md">
        <p>后端服务地址：{result.service}</p>
        <p>请求信息: {JSON.stringify(payload)}</p>
        <p>原始返回: {JSON.stringify(result)}</p>
        <p>结果数: {result.data.length}</p>
        <p>用时: {result.time} ms</p>
      </div>
    </>
  );
}
