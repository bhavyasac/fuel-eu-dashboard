import { useState } from 'react'
import './App.css'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navItems = [
    {name : "Routes", icon : ""},
    {name : "Compare", icon : ""},
    {name : "Banking", icon : ""},
    {name : "Pooling", icon : ""},
  ]
  
  return <div className = "flex bg-gray-100 h-screen">

    {/* Sidebar */}
    <div className={`fixed bg-white w-64 h-screen shadow ${isSidebarOpen?"translate-x-0":"-translate-x-64"} lg:translate-x-0 lg:static `}>
      <div className='p-4 flex justify-between border-b'> 
        <div className='text-xl font-bold'>Logo</div>
        <button className='lg:hidden' onClick={()=> setIsSidebarOpen(false)}>X</button>
      </div>


{/* {navigation bar} */}
<div className='p-4 space-y-2'>
  {navItems.map(item => {
    return (
      <div className='flex p-2 hover:bg-gray-100'>
        <div className='text-xl'>{item.icon}</div>
        <div className='text-xl'>{item.name}</div>

      </div>
    )
  })}
</div>

    </div>


    {/* main content */}
    <main className='flex-1'>
      <header className="p-4 bg-white flex justify-between">
        <button 
          className="p-2 text-xl font-bold hover:bg-gray-200 rounded-lg transition-colors lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className='text-2xl font-bold'>Dashboard</h1>
        <div className='bg-gray-300 w-10 h-10 rounded-full'></div>
      </header>
    </main>



  </div>
}

export default App
