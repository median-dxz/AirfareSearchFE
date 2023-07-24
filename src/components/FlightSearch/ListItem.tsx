import { PropsWithChildren } from "react";

export default function ListItem({ children }: PropsWithChildren<object>) {
  return (
    <li className="flex items-center justify-center py-2 px-2 rounded-sm transition-all [&>*]:whitespace-nowrap [&>svg]:text-primary sm:flex-row flex-col">
      {children}
    </li>
  );
}
