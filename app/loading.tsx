export default function Loading() {
  return (
    <div className="w-full max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-8 animate-pulse">
      {/* Navbar skeleton */}
      <div className="flex justify-between items-center mb-12">
        <div className="h-8 w-32 sm:w-52 bg-zinc-700/50 rounded" />
        <div className="flex gap-2">
          <div className="h-10 w-10 bg-zinc-700/50 rounded" />
          <div className="h-10 w-10 bg-zinc-700/50 rounded" />
        </div>
      </div>

      {/* Name skeleton */}
      <div className="flex flex-col items-center mb-16">
        <div className="h-8 w-48 bg-zinc-700/50 rounded mb-2" />
        <div className="h-6 w-36 bg-zinc-700/50 rounded" />
      </div>

      {/* Content skeleton */}
      <div className="space-y-8">
        <div className="h-4 w-full bg-zinc-700/50 rounded" />
        <div className="h-4 w-3/4 bg-zinc-700/50 rounded" />
        <div className="h-4 w-5/6 bg-zinc-700/50 rounded" />
      </div>
    </div>
  );
}
