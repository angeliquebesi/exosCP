import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import Navbar from './components/NavBar/NavBar.tsx'
import './main.css'
import Addition from './Pages/Addition/Addition.tsx'
import CompareNumbers from './Pages/Compare/CompareNumbers.tsx'
import CompareWordType from './Pages/Compare/CompareWordType.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/compare/more" element={<CompareNumbers compareValue="more" />} />
        <Route path="/compare/less" element={<CompareNumbers compareValue="less" />} />
        <Route path='/addition' element={<Addition />} />
        <Route path='/wordType' element={<CompareWordType />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
