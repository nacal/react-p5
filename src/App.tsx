import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AppChapter3 } from './pages/chapter3'
import { AppChapter4 } from './pages/chapter4'
import { AppChapter5 } from './pages/chapter5'
import { AppChapter6 } from './pages/chapter6'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='chapter3/*' element={<AppChapter3 />} />
          <Route path='chapter4/*' element={<AppChapter4 />} />
          <Route path='chapter5/*' element={<AppChapter5 />} />
          <Route path='chapter6/*' element={<AppChapter6 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
