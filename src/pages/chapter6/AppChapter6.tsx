import { Route, Routes } from 'react-router-dom'
import { Home, LinearInterpolation, MapExample, MapExample2 } from './index'

const AppChapter6 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='linearInterpolation' element={<LinearInterpolation />} />
        <Route path='mapExample' element={<MapExample />} />
        <Route path='mapExample2' element={<MapExample2 />} />
      </Routes>
    </>
  )
}
export default AppChapter6
