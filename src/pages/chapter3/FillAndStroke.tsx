import { Canvas } from 'components'
import p5 from 'p5'

const fillAndStroke = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.strokeWeight(10)
    p.stroke(100)
    p.fill(240)
    p.circle(p.width / 2, p.height / 2, 300)
  }
}

const FillAndStroke = () => {
  return (
    <>
      <Canvas sketch={fillAndStroke} />
    </>
  )
}
export default FillAndStroke
