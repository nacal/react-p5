import Canvas from 'Canvas'
import p5 from 'p5'

const viewCircle = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.ellipse(p.width / 2, p.height / 2, 200, 200)
  }
}

const ViewCircle = () => {
  return (
    <>
      <Canvas sketch={viewCircle} />
    </>
  )
}
export default ViewCircle
