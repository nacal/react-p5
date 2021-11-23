import React from 'react'
import * as sketch from './sketch'
import Canvas from './components/Canvas'

const App = () => {
  return (
    <>
      <Canvas sketch={sketch.chapter1} />
    </>
  )
}
export default App
