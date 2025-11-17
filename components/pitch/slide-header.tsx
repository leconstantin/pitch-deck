import { cn } from "@/lib/utils";

export default function SlideHeader({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-between py-6 text-lg", className)}>
      <span className="capitalize text-xl font-semibold">{title}</span>
      <a
        target="_blank"
        className="text-sm font-mono text-muted-foreground hover:text-primary"
        href="https://shure-alpha.vercel.app"
        rel="noopener"
      >
        shure.edu
      </a>
    </div>
  );
}
