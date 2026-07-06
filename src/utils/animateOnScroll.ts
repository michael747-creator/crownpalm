// Intersection Observer for scroll-triggered animations
function initScrollAnimations() {
  const animateOnScroll = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
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
    threshold: 0.1,
  });

  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    observer.observe(element);
  });

  document.querySelectorAll(".zoom-on-scroll").forEach((element) => {
    observer.observe(element);
  });
}

if (typeof window !== "undefined" && typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollAnimations);
  } else {
    initScrollAnimations();
  }
}

