import React from 'react'
import { motion } from 'framer-motion'
import Study1 from '../assets/study1.svg'
import Study2 from '../assets/study2.svg'
import Notes from '../assets/notes.png'
import Lectures from '../assets/lectures.png'
import Quiz from '../assets/quiz.png'
import DashboardImg from '../assets/dashboard.png'

export default function Home() {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-gradient-to-r from-blue-50 to-white">
      
      {/* Left Content */}
      <motion.div 
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Learn Smarter with <span className="text-blue-600">Interactive Modules</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Video lectures, notes, quizzes, and personalized dashboards — all in one place to boost your learning.
        </p>
        <motion.a 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="/courses"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700"
        >
          Get Started
        </motion.a>
      </motion.div>

      {/* Right Images */}
      <motion.div 
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center space-x-6"
      >
        <img src={Study1} alt="Study illustration 1" className="w-1/2 hidden md:block" />
        <img src={Study2} alt="Study illustration 2" className="w-1/2" />
      </motion.div>
    </section>

    {/* Features Section */}
    <section id="features" className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { img: Notes, title: 'Digital Notes', desc: 'Access your notes anytime, anywhere.' },
          { img: Lectures, title: 'Video Lectures', desc: 'Engaging and interactive learning.' },
          { img: Quiz, title: 'Quizzes', desc: 'Test your knowledge with fun quizzes.' },
          { img: DashboardImg, title: 'Dashboard', desc: 'Track your progress in real-time.' }
        ].map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transform transition duration-300 flex flex-col items-center text-center"
          >
            <img src={f.img} alt={f.title} className="w-24 h-24 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  )
}
