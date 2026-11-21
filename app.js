const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("menuButton");
const projectModal = document.getElementById("projectModal");
const projectForm = document.getElementById("projectForm");

menuButton.addEventListener("click", () => sidebar.classList.toggle("open"));

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
    sidebar.classList.remove("open");
  });
});

function openModal() {
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  projectModal.querySelector("input").focus();
}

function closeModal() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  projectForm.reset();
}

document.getElementById("createButton").addEventListener("click", openModal);
document.getElementById("closeModal").addEventListener("click", closeModal);
document.getElementById("cancelModal").addEventListener("click", closeModal);
projectModal.addEventListener("click", (event) => {
  if (event.target === projectModal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("globalSearch").focus();
  }
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeModal();
  const button = document.getElementById("createButton");
  const original = button.innerHTML;
  button.innerHTML = "<span>✓</span> Project created";
  button.disabled = true;
  setTimeout(() => {
    button.innerHTML = original;
    button.disabled = false;
  }, 1800);
});
