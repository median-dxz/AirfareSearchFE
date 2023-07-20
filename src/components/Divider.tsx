export default function Divider({ className }: { className?: string }) {
  return <hr className={`h-[1px] border-t-0 bg-neutral-200 opacity-100 ${className}`} />;
}
