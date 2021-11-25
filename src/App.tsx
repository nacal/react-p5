import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AppChapter3 } from './pages/chapter3'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='chapter3/*' element={<AppChapter3 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
