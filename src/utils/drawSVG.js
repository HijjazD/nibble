// utils/drawWhale.js

export function drawSVG(container) {
  if (!container) return;

  const paths = container.querySelectorAll("path");

  // Initialize stroke-dash for each path
  paths.forEach((path) => {
    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;
    path.getBoundingClientRect(); // force layout calc
  });

  // Scroll handler
  const onScroll = () => {
    if (!container) return; // 👈 safety check
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const elementScrollProgress =
      1 - rect.bottom / (windowHeight + rect.height);
    const scrollPercentage = Math.min(Math.max(elementScrollProgress, 0), 1);

    paths.forEach((path) => {
      const pathLength = path.getTotalLength();
      const drawLength = pathLength * scrollPercentage * 2;
      path.style.strokeDashoffset = drawLength - pathLength;

      if (scrollPercentage >= 0.99) {
        path.style.strokeDasharray = "none";
      } else {
        path.style.strokeDasharray = `${pathLength} ${pathLength}`;
      }
    });
  };

  // Attach listener
  window.addEventListener("scroll", onScroll);

  // Return cleanup function so caller can unbind
  return () => {
    window.removeEventListener("scroll", onScroll);
  };
}
