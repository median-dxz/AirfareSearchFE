import Button from "@/components/Button";
import SearchIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

export default function SearchButton() {
  return (
    <Button className="flex items-center justify-around" color="primary">
      <SearchIcon height={24} />
      <span className="mx-2">搜索</span>
    </Button>
  );
}
