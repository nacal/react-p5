import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, Chapter1 } from './pages'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/chapter1' element={<Chapter1 />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
