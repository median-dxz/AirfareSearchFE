import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import { useSearchPayload } from "@/store/SearchPayload";
import { SearchPayloadHelper } from "@/store/SearchPayloadHelper";

import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

export function SearchButton() {
  const router = useRouter();
  const [payload, dispatch] = useSearchPayload();
  const handleClick = () => {
    try {
      SearchPayloadHelper.vaildate(payload);
      router.push(`/flights`);
      console.log(payload);
    } catch (error) {
      Swal.fire({ title: "表单不合法", text: String((error as Error).message), icon: "warning" });
    }
  };

  return (
    <Button className="flex items-center justify-around" color="primary" onClick={handleClick}>
      <SearchIcon height={24} />
      <span className="mx-2">搜索</span>
    </Button>
  );
}
