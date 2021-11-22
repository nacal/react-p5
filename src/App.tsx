import React from 'react'
import sincos from './sketch/sincos'
import Canvas from './components/Canvas'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Canvas sketch={sincos} />
    </>
  )
}
export default App
