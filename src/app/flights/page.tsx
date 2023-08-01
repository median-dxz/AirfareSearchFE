import Box from "@/components/Box";
import FilghtResult from "@/ui/FilghtResult";
import Logo from "@/ui/Logo";

export default function ResultPage() {
  return (
    <main className="min-h-[100vh] flex flex-col bg-gradient-to-br from-[#ce9ffc] to-[#7367f0]">
      <Logo />
      <Box id="search-result" className="container mx-auto" stack>
        <FilghtResult />
      </Box>
    </main>
  );
}
