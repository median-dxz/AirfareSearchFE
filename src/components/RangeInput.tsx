import MuiInput from "@mui/base/Input";
import type { InputProps } from "@mui/base/Input";

const RangeInput: typeof MuiInput = ({ slotProps, ...props }: InputProps) => {
  return (
    <MuiInput
      slotProps={{
        root: {
          ...slotProps?.root,
          className: "flex relative rounded px-3 py-[0.32rem]",
        },
        input: {
          ...slotProps?.input,
          type: "range",
          className:
            "transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200",
        },
      }}
      {...props}
    />
  );
};

export default RangeInput;
