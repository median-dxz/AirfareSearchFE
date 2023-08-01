"use client";

import useSWR from "swr";

import Loading from "@/components/Loading";

import { search } from "@/lib/search";
import { useSearchPayload } from "@/store/SearchPayload";

import { FilghtResultList } from "@/ui/FilghtResultList";

export default function FilghtResult() {
  const [payload] = useSearchPayload();

  const { data: result, isLoading, error } = useSWR(payload, search);

  if (error) {
    return (
      <div className="flex p-12 bg-white justify-center items-center shadow-md">
        <p className="mx-2">搜索失败: {error}</p>
      </div>
    );
  }

  if (isLoading || !result) {
    return (
      <div className="flex p-12 bg-white justify-center items-center shadow-md">
        <Loading /> <p className="mx-2">正在搜索中...</p>
      </div>
    );
  }

  return (
    <>
      <FilghtResultList results={result.data} />
      <div className="mt-2 p-6 bg-secondary-50 text-sm shadow-md">
        <p>请求信息: {JSON.stringify(payload)}</p>
        <p>原始返回: {JSON.stringify(result)}</p>
        <p>结果数: {result.data.length}</p>
        <p>用时: {result.time} ms</p>
      </div>
    </>
  );
}
