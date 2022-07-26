/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home