export const FlightItem = ({ children }: React.PropsWithChildren) => {
  return (
    <li className="w-full flex flex-col items-center px-6 py-4 rounded text-primary-800 hover:bg-sky-100 transition-all sm:flex-row animate-[fade-in_0.3s_ease]">
      {children}
    </li>
  );
};
