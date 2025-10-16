import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  children?: React.ReactNode;
  gradient?: string;
}

export default function ImagePlaceholder({
  className,
  children,
  gradient = "from-blue-400 to-green-400"
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-gradient-to-br font-medium text-white shadow-lg",
        gradient,
        className
      )}
    >
      {children}
    </div>
  );
}
