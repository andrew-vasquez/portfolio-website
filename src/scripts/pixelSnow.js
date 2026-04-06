function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function parseHexColor(color) {
  const normalized = color.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((part) => part + part).join("")
    : normalized.padEnd(6, "f").slice(0, 6);

  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function getDesktopScale(width) {
  if (width >= 1280) return 0.42;
  if (width >= 1024) return 0.5;
  if (width >= 768) return 0.72;
  return 1;
}

function getRenderSnap(width, pixelStep) {
  if (width >= 1280) return 1;
  if (width >= 1024) return Math.max(1, Math.round(pixelStep * 0.5));
  if (width >= 768) return Math.max(1, Math.round(pixelStep * 0.75));
  return pixelStep;
}

function createFlake(width, height, overscan, sizeBase, alphaBase, velocity, drift, spawnAboveTop) {
  const depth = Math.random();
  const size = clamp(
    Math.round(sizeBase * (0.35 + depth * 0.85 + Math.random() * 0.25)),
    1,
    Math.max(1, Math.round(sizeBase * 1.4)),
  );

  return {
    x: Math.random() * (width + overscan * 2) - overscan,
    y: spawnAboveTop
      ? -Math.random() * (height * 0.35 + overscan) - size
      : Math.random() * (height + overscan * 2) - overscan,
    depth,
    size,
    alpha: clamp(alphaBase * (0.6 + depth * 0.95), 0.06, 0.28),
    vx: drift * (0.7 + depth * 1.1) + (Math.random() - 0.5) * sizeBase * 1.1,
    vy: velocity * (0.85 + depth * 1.35) + Math.random() * sizeBase * 12,
    swayAmount: sizeBase * (0.8 + depth * 1.8),
    swayFrequency: 0.75 + depth * 1.35,
    phase: Math.random() * Math.PI * 2,
  };
}

export function mountPixelSnow(container, options = {}) {
  const {
    color = "#dce4ee",
    pixelResolution = 500,
    speed = 1.2,
    brightness = 0.82,
    density = 0.28,
    variant = "square",
    direction = 125,
  } = options;

  if (!container) return () => {};

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { alpha: true });

  if (!context) return () => {};

  canvas.setAttribute("aria-hidden", "true");
  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  container.appendChild(canvas);

  const rgb = parseHexColor(color);
  const angle = (direction * Math.PI) / 180;
  const verticalBias = Math.max(0.42, Math.sin(angle));
  const horizontalBias = Math.cos(angle);

  let flakes = [];
  let width = 1;
  let height = 1;
  let pixelStep = 1;
  let overscan = 12;
  let isPageVisible = true;
  let resizeRaf = 0;
  let frameHandle = 0;
  let lastFrameTime = 0;

  function rebuildFlakes() {
    const area = width * height;
    const densityScale = clamp(density / 0.24, 0.58, 1.2);
    const targetCount = clamp(
      Math.round((area / Math.max(pixelResolution * 26, 7000)) * densityScale),
      40,
      170,
    );
    const sizeBase = Math.max(1, Math.round(pixelStep * getDesktopScale(width)));
    const alphaBase = brightness * (width >= 1024 ? 0.9 : 1.2);
    const velocity = speed * verticalBias * (44 + sizeBase * 10);
    const drift = speed * horizontalBias * (14 + sizeBase * 3);

    flakes = Array.from({ length: targetCount }, function () {
      return createFlake(width, height, overscan, sizeBase, alphaBase, velocity, drift, false);
    });
  }

  function applyCanvasSize() {
    const nextWidth = Math.max(1, Math.round(container.clientWidth));
    const nextHeight = Math.max(1, Math.round(container.clientHeight));

    if (nextWidth === width && nextHeight === height) return;

    width = nextWidth;
    height = nextHeight;
    pixelStep = Math.max(1, Math.round(width / pixelResolution));
    overscan = pixelStep * 14;

    canvas.width = width;
    canvas.height = height;
    rebuildFlakes();
    lastFrameTime = 0;
  }

  function scheduleCanvasResize() {
    if (resizeRaf !== 0) cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => {
      resizeRaf = 0;
      applyCanvasSize();
      drawFrame();
    });
  }

  function respawnFlake(flake) {
    const sizeBase = Math.max(1, Math.round(pixelStep * getDesktopScale(width)));
    const alphaBase = brightness * (width >= 1024 ? 0.9 : 1.2);
    const velocity = speed * verticalBias * (44 + sizeBase * 10);
    const drift = speed * horizontalBias * (14 + sizeBase * 3);
    const nextFlake = createFlake(width, height, overscan, sizeBase, alphaBase, velocity, drift, true);

    flake.x = nextFlake.x;
    flake.y = nextFlake.y;
    flake.depth = nextFlake.depth;
    flake.size = nextFlake.size;
    flake.alpha = nextFlake.alpha;
    flake.vx = nextFlake.vx;
    flake.vy = nextFlake.vy;
    flake.swayAmount = nextFlake.swayAmount;
    flake.swayFrequency = nextFlake.swayFrequency;
    flake.phase = nextFlake.phase;
  }

  function drawFlake(flake) {
    const renderSnap = getRenderSnap(width, pixelStep);
    const drawX = Math.round(flake.x / renderSnap) * renderSnap;
    const drawY = Math.round(flake.y / renderSnap) * renderSnap;

    context.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${flake.alpha})`;

    if (variant === "round" && flake.size > 1) {
      context.beginPath();
      context.arc(drawX + flake.size * 0.5, drawY + flake.size * 0.5, flake.size * 0.5, 0, Math.PI * 2);
      context.fill();
      return;
    }

    context.fillRect(drawX, drawY, flake.size, flake.size);
  }

  function drawFrame() {
    context.clearRect(0, 0, width, height);
    for (const flake of flakes) {
      drawFlake(flake);
    }
  }

  function tick(frameTime) {
    if (!isPageVisible) {
      frameHandle = 0;
      return;
    }

    if (lastFrameTime === 0) lastFrameTime = frameTime;
    const deltaSeconds = Math.min(0.05, (frameTime - lastFrameTime) * 0.001);
    lastFrameTime = frameTime;
    const timeSeconds = frameTime * 0.001;

    for (const flake of flakes) {
      const swayVelocity = Math.sin(timeSeconds * flake.swayFrequency + flake.phase) * flake.swayAmount;
      flake.x += (flake.vx + swayVelocity) * deltaSeconds;
      flake.y += flake.vy * deltaSeconds;

      if (flake.y > height + overscan) {
        respawnFlake(flake);
      } else if (flake.x < -overscan) {
        flake.x = width + overscan;
      } else if (flake.x > width + overscan) {
        flake.x = -overscan;
      }
    }

    drawFrame();
    frameHandle = requestAnimationFrame(tick);
  }

  function startLoop() {
    if (frameHandle !== 0) return;
    lastFrameTime = 0;
    frameHandle = requestAnimationFrame(tick);
  }

  function stopLoop() {
    if (frameHandle === 0) return;
    cancelAnimationFrame(frameHandle);
    frameHandle = 0;
  }

  function handleVisibilityChange() {
    isPageVisible = document.visibilityState === "visible";
    if (isPageVisible) {
      startLoop();
    } else {
      stopLoop();
    }
  }

  const resizeObserver = new ResizeObserver(scheduleCanvasResize);
  resizeObserver.observe(container);

  applyCanvasSize();
  drawFrame();

  document.addEventListener("visibilitychange", handleVisibilityChange);
  handleVisibilityChange();

  return () => {
    stopLoop();
    resizeObserver.disconnect();
    if (resizeRaf !== 0) cancelAnimationFrame(resizeRaf);
    document.removeEventListener("visibilitychange", handleVisibilityChange);
    if (container.contains(canvas)) {
      container.removeChild(canvas);
    }
  };
}
