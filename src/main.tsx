import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import CompareNumbers from './Pages/CompareNumbers.tsx'
import Navbar from './components/NavBar/NavBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/compare/more" element={<CompareNumbers compareValue="more" />} />
        <Route path="/compare/less" element={<CompareNumbers compareValue="less" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
