import AutoComplete from "@/components/AutoComplete";
import CityIcon from "@heroicons/react/24/outline/BuildingOffice2Icon";
import { getCities } from "@/lib/getCities";
import { City, stringifyCity } from "@/utils/type";
import clsx from "clsx";
import React, { useState } from "react";
import useSWR from "swr";

export function CityAutoComplete() {
  const { data } = useSWR("getCities", getCities, { fallbackData: [] as City[] });

  const [v, sv] = useState<City | null>(null);

  return (
    <AutoComplete
      options={data}
      renderOption={StyledOption}
      getOptionLabel={(city) => stringifyCity(city)}
      onChange={(e, v) => {
        console.log(v);
        sv(v);
      }}
      value={v}
      placeholder="选择城市"
    />
  );
}

function StyledOption({
  option,
  className,
  children,
  ...props
}: React.LiHTMLAttributes<HTMLLIElement> & { option?: City }) {
  const baseStyles = clsx(
    "flex",
    "text-ellipsis",
    "list-none",
    "cursor-default",
    "px-4 py-2",
    "text-secondary-900",
    "rounded",
    ["hover:cursor-pointer", "hover:bg-blue-50"],
    ["aria-selected:bg-blue-100", "aria-selected:text-primary-800"],
    className
  );

  if (!option) {
    return (
      <li className={baseStyles} {...props}>
        没有结果
      </li>
    );
  }

  return (
    <li className={baseStyles} {...props}>
      <CityIcon className="w-4 text-primary-400" />
      <span className="mx-2">{option.name}</span>
      <span className="text-secondary">{option.code}</span>
    </li>
  );
}
