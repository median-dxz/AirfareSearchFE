import dynamic from "next/dynamic";

import Box from "@/components/Box";
import Logo from "@/ui/Logo";

const FlightResult = dynamic(() => import("@/ui/FlightResult"), { ssr: false });
// see: https://github.com/vercel/next.js/issues/50428

export default function ResultPage() {
  return (
    <main className="min-h-[100vh] flex flex-col bg-gradient-to-br from-[#ce9ffc] to-[#7367f0]">
      <Logo />
      <Box id="search-result" className="container mx-auto" stack>
        <FlightResult />
      </Box>
    </main>
  );
}
