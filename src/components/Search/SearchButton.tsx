import Button from "@/components/Button";
import { useSearchPayload } from "@/store/SearchPayload";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { useRouter } from "next/navigation";

export default function SearchButton() {
  const router = useRouter();
  const [payload, dispatch] = useSearchPayload();
  const handleClick = () => {
    router.push(`/flights`);
    console.log(payload);
  };

  return (
    <Button className="flex items-center justify-around" color="primary" onClick={handleClick}>
      <SearchIcon height={24} />
      <span className="mx-2">搜索</span>
    </Button>
  );
}
