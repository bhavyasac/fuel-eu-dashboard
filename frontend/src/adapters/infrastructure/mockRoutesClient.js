// Simple in-memory mock adapter for local development
const MOCK = [
  { id: 'r1', name: 'Alpha → Beta', origin: 'Alpha', destination: 'Beta', meta: { distanceKm: 120 } },
  { id: 'r2', name: 'Gamma → Delta', origin: 'Gamma', destination: 'Delta', meta: { distanceKm: 240 } },
];

export const mockRoutesClient = {
  async getRoutes(filter = {}) {
    // Optionally filter by query properties
    await new Promise(r => setTimeout(r, 250)); // simulate network latency
    if (filter.origin) {
      return MOCK.filter(m => m.origin.toLowerCase().includes(String(filter.origin).toLowerCase()));
    }
    return MOCK;
  },
};
