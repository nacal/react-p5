import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { AppChapter3 } from './pages/chapter3'
import { Header } from './components'

const App = () => {
  return (
    <>
      <Header />
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
