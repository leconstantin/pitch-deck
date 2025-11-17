import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex border flex-col rounded-lg items-center justify-center border-border bg-muted/70 shadow-xs px-6 pt-8 pb-6 space-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Grid() {
  return (
    <div className="pointer-events-none absolute inset-0 flex justify-center">
      <div className="h-full w-full grid-cols-6 gap-3.5 px-4 grid">
        <div className="border-r border-[#161616]" />
        <div className="border-r border-[#161616]" />
        <div className="border-r border-[#161616]" />
        <div className="border-r border-[#161616]" />
        <div className="border-r border-[#161616]" />
      </div>
      <div className="h-full w-full absolute flex justify-between flex-col">
        <div className="border-t border-[#161616]" />
        <div className="border-t border-[#161616]" />
        <div className="border-t border-[#161616]" />
        <div className="border-t border-[#161616]" />
        <div className="border-t border-[#161616]" />
      </div>
    </div>
  );
}
