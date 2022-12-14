import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import './index.css'
import { StateProvider } from '././contexts/ContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider>
    <App />
  </StateProvider>
)
