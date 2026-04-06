let cleanup = function () {};
let idleHandle = null;
let loadTimer = null;
let initialized = false;

function getSnowProfile() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hardwareConcurrency = navigator.hardwareConcurrency == null ? 4 : navigator.hardwareConcurrency;
  const reportedDeviceMemory = Reflect.get(navigator, "deviceMemory");
  const deviceMemory = typeof reportedDeviceMemory === "number" ? reportedDeviceMemory : 4;
  const lowPower = hardwareConcurrency <= 4 || deviceMemory <= 4;
  const highPowerDesktop = !isMobile && hardwareConcurrency >= 8 && deviceMemory >= 8;

  if (prefersReducedMotion) {
    return {
      pixelResolution: isMobile ? 170 : 300,
      density: isMobile ? 0.14 : 0.16,
      farPlane: isMobile ? 14 : 16,
      brightness: 0.72,
      maxFlakeSize: isMobile ? 0.011 : 0.012,
    };
  }

  if (isMobile) {
    if (lowPower) {
      return {
        pixelResolution: 180,
        density: 0.18,
        farPlane: 15,
        brightness: 0.76,
        maxFlakeSize: 0.0112,
      };
    }

    return {
      pixelResolution: 205,
      density: 0.22,
      farPlane: 17,
      brightness: 0.8,
      maxFlakeSize: 0.0118,
    };
  }

  if (lowPower) {
    return {
      pixelResolution: 340,
      density: 0.2,
      farPlane: 17,
      brightness: 0.78,
      maxFlakeSize: 0.0124,
    };
  }

  if (highPowerDesktop) {
    return {
      pixelResolution: 460,
      density: 0.26,
      farPlane: 19,
      brightness: 0.82,
      maxFlakeSize: 0.0132,
    };
  }

  return {
    pixelResolution: 400,
    density: 0.24,
    farPlane: 18,
    brightness: 0.8,
    maxFlakeSize: 0.0128,
  };
}

/** Previously `opacity-[0.3]` on the layer; bake in so the canvas is not in a semi-transparent composited layer. */
const SNOW_LAYER_OPACITY = 0.3;

function clearPendingInit() {
  if (idleHandle !== null && typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(idleHandle);
  }

  if (loadTimer !== null) {
    window.clearTimeout(loadTimer);
  }

  idleHandle = null;
  loadTimer = null;
}

function startSnow() {
  cleanup();
  clearPendingInit();

  const element = document.querySelector("[data-pixel-snow]");
  if (!element) return;

  import("/pixel-snow-renderer.js")
    .then(function (mod) {
      const profile = getSnowProfile();
      const nextCleanup = mod.mountPixelSnow(element, {
        color: "#dce4ee",
        variant: "square",
        pixelResolution: profile.pixelResolution,
        speed: 1.2,
        density: profile.density,
        flakeSize: 0.01,
        brightness: profile.brightness * SNOW_LAYER_OPACITY,
        depthFade: 8,
        farPlane: profile.farPlane,
        direction: 125,
        maxFlakeSize: profile.maxFlakeSize,
        timeOffset: 12,
      });

      cleanup = typeof nextCleanup === "function" ? nextCleanup : function () {};
    })
    .catch(function () {
      cleanup = function () {};
    });
}

function initPixelSnow() {
  cleanup();
  clearPendingInit();

  function kickoff() {
    loadTimer = window.setTimeout(function () {
      startSnow();
    }, 120);
  }

  if (typeof window.requestIdleCallback === "function") {
    idleHandle = window.requestIdleCallback(kickoff, { timeout: 1200 });
    return;
  }

  if (document.readyState === "complete") {
    kickoff();
    return;
  }

  function onLoad() {
    window.removeEventListener("load", onLoad);
    kickoff();
  }

  window.addEventListener("load", onLoad, { once: true });
}

initPixelSnow();

if (!initialized) {
  window.addEventListener("astro:after-swap", initPixelSnow);
  initialized = true;
}
