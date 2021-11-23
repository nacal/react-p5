import React from 'react'
import * as sketch from './sketch'
import Canvas from './components/Canvas'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Canvas sketch={sketch.chapter1} />
    </>
  )
}
export default App
