import descrition from "@/app/description.json";
import Image from "next/image";
import { TypedText } from "@/components/TypedText";

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
        <p className="text-[2rem] sm:text-[3rem]">Airfare Search</p>
      </div>
      <TypedText className="text-2xl m-2 font-semibold h-6" text={descrition} />
    </div>
  );
}
