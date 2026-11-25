# Velto — frontend starter

A multi-page HTML, CSS and vanilla JavaScript foundation for Velto.

## Pages
- `index.html` — landing page
- `login.html`, `signup.html` — authentication UI (not connected)
- `dashboard.html`, `planner.html`, `backlog.html`, `trackers.html`, `goals.html`, `error-box.html`, `focus.html`, `calendar.html`, `jarvis.html`, `profile.html`

## Run locally
Open `index.html` in a browser, or use any static web server.

## Deploy on Render
1. Push this folder to a GitHub repository.
2. In Render, create a **Static Site** and connect that repository.
3. Set the publish directory to `.` (root). No build command is needed.
4. Deploy.

## Important status
This is the first frontend foundation, not a production-ready app yet. Authentication, database persistence, JARVIS AI, planner logic and user-specific data are not connected. Login and signup deliberately do not submit or pretend to create accounts. Connect a secure backend (for example Supabase plus server-side API routes) before collecting real user information.

## Design
Dark default theme, optional light theme, responsive mobile sidebar, shared module navigation, and a restrained lime accent. Theme preference is stored locally in the browser.
