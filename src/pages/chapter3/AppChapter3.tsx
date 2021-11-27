import { Route, Routes } from 'react-router-dom'
import {
  Home,
  ViewCircle,
  FillAndStroke,
  FillAndStroke2,
  MousePointer,
  MousePointerClear,
  MousePointer2,
  MousePointer3,
  Random,
  Random2,
} from './index'

const AppChapter3 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='viewCircle' element={<ViewCircle />} />
        <Route path='fillAndStroke' element={<FillAndStroke />} />
        <Route path='fillAndStroke2' element={<FillAndStroke2 />} />
        <Route path='mousePointer' element={<MousePointer />} />
        <Route path='MousePointerClear' element={<MousePointerClear />} />
        <Route path='mousePointer2' element={<MousePointer2 />} />
        <Route path='mousePointer3' element={<MousePointer3 />} />
        <Route path='random' element={<Random />} />
        <Route path='random2' element={<Random2 />} />
      </Routes>
    </>
  )
}
export default AppChapter3
