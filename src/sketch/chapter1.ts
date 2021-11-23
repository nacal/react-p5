import p5 from 'p5'

const chapter1 = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.ellipse(p.windowWidth / 2, p.windowHeight / 2, 50, 50)
  }
}

export default chapter1
