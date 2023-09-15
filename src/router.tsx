import { createBrowserRouter } from 'react-router-dom'

import App from './views/App'

export default function Router() {
  return createBrowserRouter([
    {
      element: <App />,
      path: '/'
    }
  ])
}
