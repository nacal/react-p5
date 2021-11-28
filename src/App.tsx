import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AppChapter3 } from './pages/chapter3'
import { AppChapter4 } from './pages/chapter4'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='chapter3/*' element={<AppChapter3 />} />
          <Route path='chapter4/*' element={<AppChapter4 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
