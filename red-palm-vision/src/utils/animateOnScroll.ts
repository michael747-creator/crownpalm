// Intersection Observer for scroll-triggered animations
// NOTE:
// This file is intentionally written as a module (no top-level DOMContentLoaded side effects)
// so that it can't accidentally be loaded as a raw browser script (e.g. /src/.../animateOnScroll.ts)
// and fail on production.

export function animateOnScrollInit() {
  const animateOnScroll = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        if (element.classList.contains("animate-on-scroll")) {
          element.classList.add("fade-in");
        } else if (element.classList.contains("zoom-on-scroll")) {
          element.classList.add("zoom-in");
        }
        observer.unobserve(element);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Observe all elements with the animate-on-scroll class
  document.querySelectorAll<HTMLElement>(".animate-on-scroll").forEach((element) => {
    observer.observe(element);
  });

  // Observe all elements with the zoom-on-scroll class
  document.querySelectorAll<HTMLElement>(".zoom-on-scroll").forEach((element) => {
    observer.observe(element);
  });
}

// Optional: if this module is executed in a proper bundler environment, still auto-init.
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => animateOnScrollInit());
  } else {
    animateOnScrollInit();
  }
}

