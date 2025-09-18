import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold">EdTech Platform</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <a href="#features" className="hover:underline">Features</a>
        <Link to="/courses" className="hover:underline">Courses</Link>
        <Link to="/quizzes" className="hover:underline">Quizzes</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded-md font-medium">Login</Link>
      </nav>
    </header>
  )
}

export default Navbar
