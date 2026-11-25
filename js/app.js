
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
      const currentTheme = document.documentElement.dataset.theme;
      const nextTheme = currentTheme === "light" ? "dark" : "light";

      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("velto-theme", nextTheme);
    });
  });

  // 2. MOBILE SIDEBAR
  document.querySelectorAll("[data-menu-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar) sidebar.classList.toggle("open");
    });
  });

  // 3. SUPABASE AUTHENTICATION
  const SUPABASE_URL = "https://ktwnxmkysbnrddjbeirr.supabase.co";
  const SUPABASE_KEY = "sb_publishable_eeeCEBWHOb3c55uhE4Ltjw_AUJCzcAW";

  const authForms = document.querySelectorAll("[data-backend-form]");

  if (authForms.length && window.supabase) {
    const client = window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );

    authForms.forEach(form => {
      form.addEventListener("submit", async event => {
        event.preventDefault();

        const inputs = form.querySelectorAll("input");
        const status = form.querySelector(".form-status");
        const button = form.querySelector('button[type="submit"]');

        const isSignup =
          window.location.pathname.endsWith("signup.html");

        const name = isSignup ? inputs[0].value.trim() : "";
        const email = inputs[isSignup ? 1 : 0].value.trim();
        const password = inputs[isSignup ? 2 : 1].value;

        if (status) status.textContent = "Please wait...";
        if (button) button.disabled = true;

        try {
          let result;

          if (isSignup) {
            result = await client.auth.signUp({
              email,
              password,
              options: {
                data: {
                  full_name: name
                }
              }
            });
          } else {
            result = await client.auth.signInWithPassword({
              email,
              password
            });
          }

          if (result.error) throw result.error;

          if (isSignup) {
            status.textContent = result.data.session
              ? "Account created successfully! You are signed in."
              : "Account created! Please check your email to confirm your account.";
          } else {
            status.textContent =
              "Welcome back! You are signed in successfully.";
          }

        } catch (error) {
          if (status) {
            status.textContent = error.message || "Something went wrong. Please try again.";
          }
        } finally {
          if (button) button.disabled = false;
        }
      });
    });
  } else if (authForms.length) {
    authForms.forEach(form => {
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent =
          "Authentication library not loaded. Please refresh the page.";
      }
    });
  }

  // 4. ACTIVE NAVIGATION
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".side-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 5. INITIALIZATION
  console.log("VELTO initialized successfully.");

})();
