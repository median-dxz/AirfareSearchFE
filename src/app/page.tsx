import FlightSearch from "@/ui/FlightSearch";
import Logo from "@/ui/Logo";

export default function SearchPage() {
  return (
    <main className="min-h-[100vh] bg-secondary-50">
      <div
        id="background-container"
        className="min-h-[50vh] relative w-full flex items-center bg-gradient-to-br from-[#ce9ffc] to-[#7367f0]"
      >
        <Logo />
        <div className="h-[2rem] absolute bottom-[-1rem] w-full rounded-3xl bg-secondary-50" />
      </div>
      <FlightSearch />
    </main>
  );
}
