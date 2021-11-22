import React, { useEffect } from 'react'
import p5 from 'p5'

type Props = {
  sketch: (p: p5) => void
}

const Canvas: React.FC<Props> = (props) => {
  useEffect(() => {
    new p5(props.sketch)
  }, [props.sketch])
  return <></>
}
export default Canvas
