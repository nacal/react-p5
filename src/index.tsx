import { render } from 'react-dom'
import App from './App'
import './index.css'

const Root = () => {
  return <App />
}

const rootElement = document.getElementById('root')
render(<Root />, rootElement)
