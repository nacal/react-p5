import React from 'react'
import circle from './sketch/circle'
import Canvas from './Canvas'

const App = () => {
  return (
    <>
      <p>Hello World!</p>
      <Canvas sketch={circle} />
    </>
  )
}
export default App
