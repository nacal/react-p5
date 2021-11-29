import { Route, Routes } from 'react-router-dom'
import { Home } from './index'

const AppChapter5 = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}
export default AppChapter5
