export default function Divider({ className }: { className?: string }) {
  return <hr className={`h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 ${className}`} />;
}
