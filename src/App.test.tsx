import ReactDOM from 'react-dom'
import SamuraiJSApp from './App'
import {createRoot} from 'react-dom/client'

it('renders without crashing', () => {
  const div = document.createElement('div')
  createRoot(document.createElement('div')).render(<SamuraiJSApp />)
  ReactDOM.unmountComponentAtNode(div)
})
