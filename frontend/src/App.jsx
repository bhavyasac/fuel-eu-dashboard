// Minimal App.jsx update to wire routing, lazy load pages, and use ServiceProvider.
// If you prefer to keep existing App.jsx layout, merge these changes carefully.
import { useState, Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ServiceProvider } from './shared/context/ServiceProvider';

// Lazy load page components
const RoutesPage = lazy(() => import('./adapters/ui/RoutesPage'));  
// const ComparePage = lazy(() => import('./adapters/ui/ComparePage'));
// const BankingPage = lazy(() => import('./adapters/ui/BankingPage'));
// const PoolingPage = lazy(() => import('./adapters/ui/PoolingPage'));

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navItems = [
    { name: 'Routes', to: '/routes' },
    { name: 'Compare', to: '/compare' },
    { name: 'Banking', to: '/banking' },
    { name: 'Pooling', to: '/pooling' },
  ];

  return (
    <BrowserRouter>
      {/* ServiceProvider will read REACT_APP_USE_MOCKS env var if provided; no code changes needed to toggle */}
      <ServiceProvider>
        <div className="flex bg-gray-100 h-screen">
          {/* Sidebar */}
          <div className={`fixed bg-white w-64 h-screen shadow ${isSidebarOpen ? 'translate-x-0' : '-translate-x-64'} lg:translate-x-0 lg:static`}> 
            <div className="p-4 flex justify-between border-b">
              <div className="text-xl font-bold">Logo</div>
              <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>X</button>
            </div>

            <nav className="p-4 space-y-2">
              {navItems.map(item => (
                <Link key={item.name} to={item.to} className="block p-2 hover:bg-gray-100 rounded">
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* main content */}
          <main className="flex-1 lg:ml-64">
            <header className="p-4 bg-white flex justify-between">
              <button
                className="p-2 text-xl font-bold hover:bg-gray-200 rounded-lg transition-colors lg:hidden"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                ☰
              </button>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <div className="bg-gray-300 w-10 h-10 rounded-full" />
            </header>

            <div>
              <Suspense fallback={<div className="p-4">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<RoutesPage />} />
                  <Route path="/routes" element={<RoutesPage />} />
                  <Route path="/compare" element={<div className="p-4">Compare (work in progress)</div>} />
                  <Route path="/banking" element={<div className="p-4">Banking (work in progress)</div>} />
                  <Route path="/pooling" element={<div className="p-4">Pooling (work in progress)</div>} />
                </Routes>
              </Suspense>
            </div>
          </main>
        </div>
      </ServiceProvider>
    </BrowserRouter>
  );
}

export default App;
