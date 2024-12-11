import { LoaderIcon } from "lucide-react";

interface IFullscreenLoader {
  label?: string;
}

export default function FullscreenLoader({ label }: IFullscreenLoader) {
  return (
    <div className="min-h-screen flex flex-flex-col items-center justify-center gap-2">
      <LoaderIcon className="animate-spin size-6 text-muted-foreground" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
}
