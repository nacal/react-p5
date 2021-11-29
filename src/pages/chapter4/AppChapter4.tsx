import { Route, Routes } from 'react-router-dom'
import { Home, GainDiameter, ResetGainDiameter, ChangeColor } from './index'

const AppChapter4 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='gainDiameter' element={<GainDiameter />} />
        <Route path='resetGainDiameter' element={<ResetGainDiameter />} />
        <Route path='changeColor' element={<ChangeColor />} />
      </Routes>
    </>
  )
}
export default AppChapter4
