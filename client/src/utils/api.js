const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Sends the contact form to the backend.
 * Throws with a friendly message if the backend is unreachable or returns an error.
 */
export async function sendContactMessage(payload) {
  let response;
  try {
    response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      "Couldn't reach the server. If you're running this locally, make sure the backend (server/) is running."
    );
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong sending your message.');
  }

  return data;
}

/**
 * Fetches projects from the backend. Callers should fall back to the static
 * data in `data/portfolioData.js` if this rejects.
 */
export async function fetchProjects() {
  const response = await fetch(`${API_URL}/projects`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  const data = await response.json();
  return data.projects || [];
}
