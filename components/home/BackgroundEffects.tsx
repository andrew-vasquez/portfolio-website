"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const PixelSnow = dynamic(() => import("@/components/PixelSnow"), {
  ssr: false,
});

function useIsMobile(breakpoint = 768) {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches,
    () => false,
  );
}

export default function BackgroundEffects() {
  const isMobile = useIsMobile();

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(7,8,10,0.16)_26%,rgba(7,8,10,0.8)_100%)]" />
      <div className="absolute inset-0 opacity-[0.3]">
        <PixelSnow
          color="#dce4ee"
          variant="square"
          pixelResolution={isMobile ? 220 : 500}
          maxFps={60}
          speed={1.2}
          density={0.28}
          flakeSize={0.01}
          brightness={0.82}
          depthFade={8}
          farPlane={20}
          direction={125}
        />
      </div>
    </div>
  );
}
