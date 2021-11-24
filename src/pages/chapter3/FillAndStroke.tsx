import Canvas from 'Canvas'
import p5 from 'p5'

const fillAndStroke = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.strokeWeight(10)
    p.stroke(100)
    p.fill(240)
    p.ellipse(p.width / 2, p.height / 2, 200, 200)
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
