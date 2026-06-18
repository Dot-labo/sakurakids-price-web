const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".fee-panel");

// Remove hidden attribute from all panels on load (CSS handles visibility via is-active class)
panels.forEach((panel) => { panel.removeAttribute("hidden"); });

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.id === target);
    });
  });
});
