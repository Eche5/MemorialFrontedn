// Backend address, set with VITE_API_URL (see .env.example).
// Locally it comes from .env; on Vercel from Project Settings → Environment Variables.
export const API_URL = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

if (!API_URL) {
  console.warn(
    "VITE_API_URL is not set — tributes, photos and login will not work. See .env.example."
  );
}

// Photo gallery endpoint (mounted at the server root, not under /api/v1)
export const PHOTOS_API = `${API_URL}/photos`;

// Base for all user/tribute endpoints, e.g. `${USERS_API}/tribute`
export const USERS_API = `${API_URL}/api/v1/users`;
