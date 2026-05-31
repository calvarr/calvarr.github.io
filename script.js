const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

const tabs = document.querySelectorAll(".install-tab");
const panels = document.querySelectorAll(".install-panel");

function showInstallPanel(panelId) {
  tabs.forEach((tab) => {
    const active = tab.dataset.panel === panelId;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
  panels.forEach((panel) => {
    const active = panel.id === panelId;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const id = tab.dataset.panel;
    if (id) showInstallPanel(id);
  });
});

document.querySelectorAll(".install-tab-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const id = link.dataset.panel;
    if (id) showInstallPanel(id);
  });
});
