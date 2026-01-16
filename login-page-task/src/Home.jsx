import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          HELLO WELCOME
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We're glad to have you here!
        </p>
        <div className="space-x-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
          <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}