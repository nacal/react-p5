import Canvas from 'Canvas'
import p5 from 'p5'

const sketch = (p: p5) => {
  const route = [
    { x: 100, y: 100 },
    { x: 300, y: 300 },
    { x: 300, y: 100 },
  ]

  let t: number, i: number

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    t = 0
    i = 0
  }

  p.draw = () => {
    p.clear()

    route.forEach((r) => {
      p.circle(r.x, r.y, 20)
    })

    const prev = route[i]
    const next = route[(i + 1) % route.length]

    const x = p.lerp(prev.x, next.x, t)
    const y = p.lerp(prev.y, next.y, t)

    p.circle(x, y, 10)

    t += 0.01
    if (t > 1) {
      t = 0
      i++
      i %= route.length
    }
  }
}

const LinearInterpolation = () => {
  return (
    <>
      <Canvas sketch={sketch} />
    </>
  )
}
export default LinearInterpolation
