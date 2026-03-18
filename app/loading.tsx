export default function Loading() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.03] px-4 py-3">
          <div className="h-3 w-28 rounded-full bg-white/10" />
          <div className="flex gap-2">
            <div className="h-9 w-9 rounded-full bg-white/10" />
            <div className="h-9 w-9 rounded-full bg-white/10" />
            <div className="h-9 w-9 rounded-full bg-white/10" />
          </div>
        </div>

        <div className="mb-10 h-3 w-56 rounded-full bg-white/10" />
        <div className="space-y-4">
          <div className="h-16 w-full max-w-4xl rounded-2xl bg-white/10" />
          <div className="h-16 w-full max-w-3xl rounded-2xl bg-white/10" />
          <div className="h-16 w-full max-w-2xl rounded-2xl bg-white/10" />
        </div>

        <div className="mt-6 h-4 w-full max-w-xl rounded-full bg-white/10" />
        <div className="mt-3 h-4 w-full max-w-2xl rounded-full bg-white/10" />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="h-[360px] rounded-[28px] bg-white/10" />
          <div className="h-[360px] rounded-[28px] bg-white/10" />
        </div>
      </div>
    </div>
  );
}
