import { SearchPayloadProvider } from "@/store/SearchPayload";
import { CityProvider } from "@/store/CitiesStore";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import description from "@/app/data/description.json";
import cities from "@/app/data/cities.json";

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
        <CityProvider cities={new Map(cities.map((city) => [city.code, city.name]))}>
          <SearchPayloadProvider>{children}</SearchPayloadProvider>
        </CityProvider>
      </body>
    </html>
  );
}
