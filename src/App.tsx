import React, { useState } from 'react'
import "./app.css"
import Hero from './components/Hero/Hero'
import About from './components/About/About'

const App: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  return (
    <>
    <Hero current={current} setCurrent={setCurrent} />
    <div className=''>
      <About />
      <div className='tw-w-full tw-h-screen'>

      </div>
    </div>
    </>
  )
}

export default App
