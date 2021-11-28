import { Route, Routes } from 'react-router-dom'
import { Home, GainDiameter, ResetGainDiameter } from './index'

const AppChapter3 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='gainDiameter' element={<GainDiameter />} />
        <Route path='resetGainDiameter' element={<ResetGainDiameter />} />
      </Routes>
    </>
  )
}
export default AppChapter3
