import "./globals.css";
import description from "./description.json";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Logo from "@/ui/Logo";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "Microsoft YaHei", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Airfare Search",
  description: description[0],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={roboto.className}>
        <main className="h-full">
          <div
            id="background-container"
            className="min-h-[50vh] relative w-full flex items-center bg-gradient-to-br from-[#ce9ffc] to-[#7367f0]"
          >
            <Logo />
            <div className="h-[2rem] absolute bottom-[-1rem] w-full rounded-3xl bg-white" />
          </div>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
