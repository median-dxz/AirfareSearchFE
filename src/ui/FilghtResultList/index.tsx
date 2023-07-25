import { ResultItem } from "@/components/Result/ResultItem";
import { FlightResult } from "@/utils/type";
import { FilghtList } from "./FilghtList";

function ResultHeader({ agencies, price }: { agencies: string[]; price: number }) {
  return (
    <div className="flex justify-between px-6 py-4 text-2xl font-bold">
      <span className="relative pt-4">
        <span className="absolute top-0 left-0 font-bold text-xs text-primary">出票代理</span>
        <span>{agencies.join(", ")}</span>
      </span>
      <span className="pt-4 whitespace-nowrap">{price} ￥</span>
    </div>
  );
}

interface FilghtResultListProps {
  data: FlightResult[];
}

export default function FilghtResultList({ data }: FilghtResultListProps) {
  return (
    <ul className="w-full flex flex-col space-y-2">
      {data.map((result, index) => (
        <ResultItem key={index}>
          <ResultHeader agencies={result.agencies} price={result.price} />
          <FilghtList filghts={result.filghts} />
        </ResultItem>
      ))}
    </ul>
  );
}
