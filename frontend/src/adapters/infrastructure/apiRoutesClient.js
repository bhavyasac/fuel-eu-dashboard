// Real API adapter: implements getRoutes(filter) -> Promise<Routes[]>
const API_BASE = process.env.REACT_APP_API_BASE || '';

export const apiRoutesClient = {
  async getRoutes(filter = {}) {
    const params = new URLSearchParams(filter).toString();
    const url = `${API_BASE}/api/routes${params ? `?${params}` : ''}`;
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
      credentials: 'same-origin',
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to fetch routes: ${res.status} ${text}`);
    }
    return res.json();
  },
};