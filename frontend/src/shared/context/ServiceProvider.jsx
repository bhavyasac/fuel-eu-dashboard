import React, { createContext, useContext, useMemo } from 'react';
import { apiRoutesClient } from '../../adapters/infrastructure/apiRoutesClient';
import { mockRoutesClient } from '../../adapters/infrastructure/mockRoutesClient';

// Simple DI container via React context. Pass `services` prop to override (useful for tests).
const ServiceContext = createContext(null);

export function ServiceProvider({ children, services = {}, useMocks = false }) {
  const defaults = {
    routesRepository: useMocks ? mockRoutesClient : apiRoutesClient,
    // add other repositories here...
  };

  const value = useMemo(() => ({ ...defaults, ...services }), [useMocks, JSON.stringify(services)]);
  return <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>;
}

export function useServices() {
  const ctx = useContext(ServiceContext);
  if (!ctx) throw new Error('useServices must be used within ServiceProvider');
  return ctx;
}