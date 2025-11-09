import React, { useEffect, useState } from 'react';
import { fetchRoutes } from '../../core/usecases/fetchRoutes';
import { useServices } from '../../shared/context/ServiceProvider';

export default function RoutesPage() {
  const { routesRepository } = useServices();
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchRoutes({ routesRepository })
      .then(data => {
        if (!mounted) return;
        setRoutes(data);
        setError(null);
      })
      .catch(err => {
        if (!mounted) return;
        setError(err.message || String(err));
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => { mounted = false; };
  }, [routesRepository]);

  if (loading) return <div className="p-4">Loading routes...</div>;
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>;
  if (!routes.length) return <div className="p-4">No routes found</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Routes</h2>
      <ul className="space-y-2">
        {routes.map(r => (
          <li key={r.id} className="p-2 border rounded">
            <div className="font-semibold">{r.name}</div>
            <div className="text-sm text-gray-600">{r.origin} → {r.destination}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}