import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
         <Route path="/"  element={<Home/>} />
      </Routes>
      <h1>App</h1>
    </>
  )
}

export default App