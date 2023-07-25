import { PropsWithChildren } from "react";

export default function RouteItem({ children }: PropsWithChildren<object>) {
  return (
    <li className="flex items-center justify-center p-2 space-x-2 rounded-sm transition-all [&>*]:whitespace-nowrap [&>svg]:text-primary sm:flex-row flex-col">
      {children}
    </li>
  );
}
