import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />}/>
          <Route path="/Home" element={<HomeScreen />}/>
        </Routes>
      </Router>
    </>
  )
}
