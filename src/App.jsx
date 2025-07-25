import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import About from './pages/About';
import DevNotes from './pages/DevNotes';

function App() {
  
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1723306743371-38f6666be1a3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-20 z-0"></div>
      <div className='flex flex-col justify-between sm:px-[2vw] md:px-[4vw] lg:px-[5vw] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
          <ToastContainer />
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path='/about' element={<About />} />
              <Route path='/devnotes' element={<DevNotes />} />
            </Route>
          </Routes>
        
      </div>
    </div>
  )
}

export default App
