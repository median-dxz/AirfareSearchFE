import Button from "@/components/Button";
import { useSearchPayload } from "@/store/SearchPayload";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import React from "react";

export function NewRouteButton() {
  const [payload, dispatch] = useSearchPayload();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    dispatch({ type: "addRoute", data: { departure: "", arrival: "", departureDate: new Date() } });
  };

  return (
    <Button color="secondary" className="min-w-fit" onClick={handleClick} iconOnly>
      <PlusIcon className="w-6" />
    </Button>
  );
}
