// Pure use-case: receives a routesRepository implementing getRoutes(filter)
// Returns normalized DTOs. No React, no fetch logic here.
export async function fetchRoutes({ routesRepository, filter = {} } = {}) {
  if (!routesRepository || typeof routesRepository.getRoutes !== 'function') {
    throw new Error('fetchRoutes requires a routesRepository with getRoutes()');
  }
  const raw = await routesRepository.getRoutes(filter);
  return (raw || []).map(r => ({
    id: r.id,
    name: r.name || `${r.origin || 'Unknown'} → ${r.destination || 'Unknown'}`,
    origin: r.origin || '',
    destination: r.destination || '',
    meta: r.meta || {},
  }));
}