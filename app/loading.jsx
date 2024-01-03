import { Skeleton } from "../components/ui/skeleton";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default Loading;
