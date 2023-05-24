import React, { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Assets from './components/Assets/Assets'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import Login from './components/Login/Login'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import Error from './components/Error/Error'
import MyAssets from './components/MyAssets/MyAssets'
import { savedContext } from './contexts/savedContext'



function App() {

  let [saved, setSaved] = useState([]);

  return (
    <div id='react-root'>
      <savedContext.Provider value={{ saved, setSaved }}>
        <Routes>
          <Route path='/' element={<div> <Header /> <Outlet /> <Footer /> </div>}>
            <Route index element={<div> <HomePage /> </div>} />
            <Route path='assets' element={<div> <Assets /> </div>} />
            <Route path='myAssets' element={<div> <MyAssets /> </div>} />
            <Route path='login' element={<div> <Login /> </div>} />
            <Route path='*' element={<div><Error /></div>} />
          </Route>
        </Routes>
      </savedContext.Provider>
    </div>
  )
}

export default App
