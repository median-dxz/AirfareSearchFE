import { PropsWithChildren, forwardRef, HTMLAttributes } from "react";

type BoxProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>> & { stack?: boolean };

export default forwardRef<HTMLDivElement, BoxProps>(function Box(
  { children, className, stack = false, ...props },
  ref
) {
  className = `flex w-full relative ${stack ? "flex-col" : ""} ${className ?? ""}`;
  return (
    <div ref={ref} className={className.trim()} {...props}>
      {children}
    </div>
  );
});
