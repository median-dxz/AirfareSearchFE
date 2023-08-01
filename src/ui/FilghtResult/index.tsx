"use client";

import React from "react";

import Loading from "@/components/Loading";

import type { SearchResult } from "@/utils/type";
import { search } from "@/lib/search";
import { useSearchPayload } from "@/store/SearchPayload";

import { FilghtResultList } from "@/ui/FilghtResultList";

export default function FilghtResult() {
  const [result, setResult] = React.useState<SearchResult | null>(null);

  const [payload] = useSearchPayload();

  React.useEffect(() => {
    search(payload).then((data) => {
      setResult(data);
    });
  }, [payload]);

  if (result) {
    return (
      <>
        <FilghtResultList results={result?.data} />
        <div className="mt-2 p-6 bg-secondary-50 text-sm shadow-md">
          <p>请求信息: {JSON.stringify(payload, undefined, 4)}</p>
          <p>结果数: {result?.data.length}</p>
          <p>用时: {result?.time} ms</p>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex p-12 bg-white justify-center items-center shadow-md">
        <Loading /> <p className="mx-2">正在搜索中...</p>
      </div>
    );
  }
}
