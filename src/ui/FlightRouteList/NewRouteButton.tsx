import Button from "@/components/Button";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";

export function NewRouteButton() {
  return (
    <Button color="secondary" className="w-1/3 min-w-fit" iconOnly>
      <PlusIcon className="w-6" />
    </Button>
  );
}
