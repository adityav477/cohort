import { useState, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
const About = lazy(() => import("./components/About.jsx"));


function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<Suspense fallback={"loading.."}><About /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )

  function Appbar() {
    const navigate = useNavigate();

    return (<div>
      <button onClick={() => {
        navigate("/");
      }}>Landing</button>

      <button onClick={() => {
        navigate("/about");
      }}>About</button>

      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboard</button>
    </div>)
  }
}

export default App
