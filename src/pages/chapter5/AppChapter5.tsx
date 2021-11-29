import { Route, Routes } from 'react-router-dom'
import { Home, MouseRainbow } from './index'

const AppChapter5 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='mouseRainbow' element={<MouseRainbow />} />
      </Routes>
    </>
  )
}
export default AppChapter5
