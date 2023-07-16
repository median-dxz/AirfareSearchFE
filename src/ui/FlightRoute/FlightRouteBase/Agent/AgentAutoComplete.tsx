import DropDown, { useDropDown } from "@/components/Dropdown";
import clsx from "clsx";
import React, { forwardRef } from "react";

const inputClassNames = [
  "peer",
  "block",
  "min-h-[auto]",
  "w-full",
  "rounded",
  "border-1",
  "bg-transparent",
  "outline-none",
  "transition-all",
  "duration-200",
  "ease-linear",
  "focus:placeholder:opacity-100",
  "motion-reduce:transition-none",
  "cursor-pointer",
  "py-[0.32rem]",
  "px-3",
  "leading-[1.6]",
];

export default forwardRef<HTMLDivElement>(function AgentAutoComplete(_, ref) {
  return (
    <div ref={ref} className="max-w-full ml-2">
      <input className={clsx(inputClassNames)} />
    </div>
  );
});
