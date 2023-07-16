import { PropsWithChildren } from "react";

export default function ListItem({ children }: PropsWithChildren<object>) {
  return (
    <li className="flex items-center justify-center py-2 px-2 border-dashed border-1 rounded-sm hover:shadow-md transition-all hover:border-solid hover:border-primary [&>*]:whitespace-nowrap [&>svg]:text-primary sm:flex-row flex-col">
      {children}
    </li>
  );
}
