import { Route, Routes } from 'react-router-dom'
import { Home, LinearInterpolation, MapExample } from './index'

const AppChapter6 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='linearInterpolation' element={<LinearInterpolation />} />
        <Route path='mapExample' element={<MapExample />} />
      </Routes>
    </>
  )
}
export default AppChapter6
