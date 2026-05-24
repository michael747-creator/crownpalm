// Intersection Observer for scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
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
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  // Observe all elements with the animate-on-scroll class
  document.querySelectorAll(".animate-on-scroll").forEach((element) => {
    observer.observe(element);
  });

  // Observe all elements with the zoom-on-scroll class
  document.querySelectorAll(".zoom-on-scroll").forEach((element) => {
    observer.observe(element);
  });
});