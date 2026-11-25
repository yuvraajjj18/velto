
(() => {
  "use strict";

  // VELTO CORE

  // 1. THEME MANAGEMENT
  const savedTheme = localStorage.getItem("velto-theme");

  if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
  }

  document.querySelectorAll("[data-theme-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const currentTheme =
        document.documentElement.dataset.theme;

      const nextTheme =
        currentTheme === "light" ? "dark" : "light";

      document.documentElement.dataset.theme = nextTheme;

      localStorage.setItem("velto-theme", nextTheme);
    });
  });


  // 2. MOBILE SIDEBAR
  document.querySelectorAll("[data-menu-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const sidebar = document.querySelector(".sidebar");

      if (sidebar) {
        sidebar.classList.toggle("open");
      }
    });
  });


  // 3. AUTHENTICATION PLACEHOLDER
  // Secure authentication will be connected later.

  document.querySelectorAll("[data-backend-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const status = form.querySelector(".form-status");

      if (status) {
        status.textContent =
          "Not submitted: secure authentication is not connected yet.";
      }
    });
  });


  // 4. ACTIVE NAVIGATION
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".side-link").forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active");
    }
  });


  // 5. INITIALIZATION
  console.log("VELTO initialized successfully.");

})();
