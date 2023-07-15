import descrition from "@/app/description.json";
import Image from "next/image";
import { TypedText } from "./TypedText";

export default function Logo() {
  return (
    <div id="logo" className="mx-auto flex flex-col items-center pt-8 pb-10 [&>*]:text-white select-none">
      <div className="flex items-center [&>*]:m-2">
        <Image
          className="bg-white rounded-lg drop-shadow-xl"
          alt="logo"
          src="/images/logo.svg"
          width={48}
          height={48}
          priority
        />
        <div className="text-[48px]">Airfare Search</div>
      </div>
      <TypedText className="text-2xl m-2 font-semibold" text={descrition} />
    </div>
  );
}
