let observer;
let initialized = false;

const revealSelector = "[data-reveal]";

function markVisible(entry) {
  entry.target.classList.add("is-visible");
}

export function initRevealMotion() {
  if (typeof window === "undefined" || initialized) {
    return;
  }

  initialized = true;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = Array.from(document.querySelectorAll(revealSelector));

  if (!nodes.length) {
    return;
  }

  if (prefersReducedMotion) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        markVisible(entry);
        observer?.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.14,
    },
  );

  nodes.forEach((node) => observer.observe(node));
}
