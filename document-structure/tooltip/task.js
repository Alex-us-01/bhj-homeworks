document.addEventListener("DOMContentLoaded", () => {
  const hasTooltipElements = document.querySelectorAll(".has-tooltip");

  let activeTooltip = null;

  hasTooltipElements.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();

      if (activeTooltip) {
        activeTooltip.remove();
        activeTooltip = null;
      }

      if (activeTooltip && activeTooltip.dataset.target === element) {
        return;
      }

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip tooltip_active";
      tooltip.textContent = element.title;

      const { top, left, height } = element.getBoundingClientRect();
      tooltip.style.position = "absolute";
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top + height + 5}px`; 

      document.body.appendChild(tooltip);

      activeTooltip = tooltip;
    });
  });

  document.addEventListener("click", (event) => {
    if (activeTooltip && !event.target.closest(".has-tooltip")) {
      activeTooltip.remove();
      activeTooltip = null;
    }
  });
});