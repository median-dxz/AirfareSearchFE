import Button from "@/components/Button";
import { useSearchPayload } from "@/store/SearchPayload";
import { SeachRoute } from "@/utils/type";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import React from "react";

let nextId = 0;

const getEmptyRoute = () => {
  return {
    departureDate: new Date(),
    id: nextId++,
  } as SeachRoute;
};

export function NewRouteButton() {
  const [payload, dispatch] = useSearchPayload();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    dispatch({
      type: "addRoute",
      data: getEmptyRoute(),
    });
  };

  return (
    <Button color="secondary" className="min-w-fit" onClick={handleClick} iconOnly>
      <PlusIcon className="w-6" />
    </Button>
  );
}
