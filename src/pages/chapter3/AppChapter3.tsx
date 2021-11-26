import { Route, Routes } from 'react-router-dom'
import {
  Home,
  ViewCircle,
  FillAndStroke,
  FillAndStroke2,
  MousePointer,
  MousePointerClear,
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
      </Routes>
    </>
  )
}
export default AppChapter3
