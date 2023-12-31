import type { ButtonOwnerState, ButtonProps } from "@mui/base/Button";
import MuiButton from "@mui/base/Button";
import clsx from "clsx";

const cls = {
  primary: [
    "flex",
    "rounded",
    "bg-primary",
    "px-6",
    "pb-2",
    "pt-2.5",
    "text-xs",
    "font-medium",
    "uppercase",
    "leading-normal",
    "text-white",
    "shadow-[0_4px_9px_-4px_#3b71ca]",
    "transition",
    "duration-150",
    "ease-in-out",
    "hover:bg-primary-600",
    "hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
    "focus:bg-primary-600",
    "focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
    "focus:outline-none",
    "focus:ring-0",
    "active:bg-primary-700",
    "active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]",
    "disabled:opacity-70",
  ],
  secondary: [
    "flex",
    "rounded",
    "bg-primary-100",
    "px-6",
    "pb-2",
    "pt-2.5",
    "text-xs",
    "font-medium",
    "uppercase",
    "leading-normal",
    "text-primary-700",
    "transition",
    "duration-150",
    "ease-in-out",
    "hover:bg-primary-accent-100",
    "focus:bg-primary-accent-100",
    "focus:outline-none",
    "focus:ring-0",
    "active:bg-primary-accent-200",
    "disabled:opacity-70",
  ],
  tetriary: [
    "flex",
    "rounded",
    "px-6",
    "pb-2",
    "pt-2.5",
    "text-xs",
    "font-medium",
    "uppercase",
    "leading-normal",
    "text-primary",
    "transition",
    "duration-150",
    "ease-in-out",
    "hover:bg-blue-100",
    "hover:bg-opacity-50",
    "hover:text-primary-600",
    "focus:text-primary-600",
    "focus:outline-none",
    "focus:ring-0",
    "active:text-primary-700",
    "disabled:opacity-70",
  ],
};

const filterState = (disabled = false, iconOnly = false) => {
  return (className: string) => {
    let state = !disabled || !["hover", "active"].find((state) => className.includes(state));
    let iconPadding = !iconOnly || !["pb", "px", "pt"].find((iconPadding) => className.startsWith(iconPadding));
    return state && iconPadding;
  };
};

function Button({
  color = "primary",
  children,
  disabled,
  iconOnly,
  ...props
}: ButtonProps & { color?: keyof typeof cls; iconOnly?: boolean }) {
  return (
    <MuiButton
      type="button"
      slotProps={{
        root: (_ownerState: ButtonOwnerState) => ({
          className: clsx(cls[color].filter(filterState(disabled, iconOnly)), iconOnly && "p-2 justify-center"),
        }),
      }}
      disabled={disabled}
      {...props}
    >
      {children}
    </MuiButton>
  );
}

export default Button;
