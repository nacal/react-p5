import { Route, Routes } from 'react-router-dom'
import { Home, LinearInterpolation } from './index'

const AppChapter6 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='linearInterpolation' element={<LinearInterpolation />} />
      </Routes>
    </>
  )
}
export default AppChapter6
