import React from "react";
import Swal from "sweetalert2";

import Button from "@/components/Button";
import { useSearchPayload } from "@/store/SearchPayload";
import type { SearchRoute } from "@/utils/type";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import dayjs from "dayjs";

let nextId = 0;

const getEmptyRoute = () => {
  return {
    departureDate: dayjs().format("YYYYMMDD"),
    id: nextId++,
  } as SearchRoute;
};

export function NewRouteButton() {
  const [payload, dispatch] = useSearchPayload();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (evt) => {
    if (payload.routes.length < 8) {
      dispatch({
        type: "addRoute",
        data: getEmptyRoute(),
      });
    } else {
      Swal.fire({ title: "最多只支持添加8段行程", icon: "info" });
    }
  };

  return (
    <Button color="secondary" className="min-w-fit" onClick={handleClick} iconOnly>
      <PlusIcon className="w-6" />
    </Button>
  );
}
