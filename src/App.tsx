import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { ViewCircle, FillAndStroke, FillAndStroke2 } from './pages/chapter3'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='chapter3'>
            <Route path='viewCircle' element={<ViewCircle />} />
            <Route path='fillAndStroke' element={<FillAndStroke />} />
            <Route path='fillAndStroke2' element={<FillAndStroke2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
