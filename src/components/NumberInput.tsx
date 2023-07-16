import MuiInput from "@mui/base/Input";
import type { InputProps } from "@mui/base/Input";

const NumberInput = ({ slotProps, ...props }: InputProps) => {
  return (
    <MuiInput
      slotProps={{
        root: {
          ...slotProps?.root,
          className: "flex relative rounded border-1 px-3 py-[0.32rem]",
        },
        input: {
          ...slotProps?.input,
          type: "number",
          className:
            "w-full text-sm min-h-[auto] border-0 bg-transparent leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none",
        },
      }}
      {...props}
    />
  );
};

export default NumberInput;
