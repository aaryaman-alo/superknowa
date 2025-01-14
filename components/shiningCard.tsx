import { cn } from "@/utils/cn";

interface ShiningCardProps {
  title: string;
  description: string;
}

export function ShiningCard({ title, description }: ShiningCardProps) {
  return (
    <div
      className={cn(
        "inline-flex w-full animate-shine items-center justify-center rounded-xl border",
        "border-violet-500/10 bg-[linear-gradient(110deg,#7c3aed,45%,#6d28d9,55%,#7c3aed)] bg-[length:400%_100%]",
        "px-4 py-5 text-sm transition-colors",
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm leading-[1.5] text-violet-100">
          {description}
        </p>
      </div>
    </div>
  );
}
