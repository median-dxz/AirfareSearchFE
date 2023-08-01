import { SearchPayloadProvider } from "@/store/SearchPayload";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import description from "./description.json";
import "./globals.css";

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
        <SearchPayloadProvider> {children}</SearchPayloadProvider>
      </body>
    </html>
  );
}
