import React from 'react'
import "./app.css"
import Hero from './components/Hero/Hero'
import About from './components/About/About'

const App: React.FC = () => {
  return (
    <>
    <Hero />
    <div className=''>
      <About />
      <div className='tw-w-full tw-h-screen'>

      </div>
    </div>
    </>
  )
}

export default App
