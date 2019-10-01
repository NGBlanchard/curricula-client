import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker'
import { CourseProvider } from './context/CourseContext'
import App from './components/App/App'
import './index.css'


ReactDOM.render(
  <BrowserRouter>
      <CourseProvider>
        <App />
      </CourseProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

// serviceWorker.unregister()
