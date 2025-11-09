// Port (interface) — describe what an adapter must implement.
// This is just a contract / docs file (JS style). Implementations must
// expose the same methods: getRoutes(params) -> Promise<Routes[]>
/**
 * @typedef {Object} Route
 * @property {string} id
 * @property {string} name
 * @property {string} origin
 * @property {string} destination
 */

/**
 * RoutesRepository (port)
 * Methods:
 *  - getRoutes(filter): Promise<Route[]>
 *
 * Note: this file documents the port. Concrete adapters (infrastructure)
 * implement the same function signatures.
 */
export default {};