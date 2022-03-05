import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app'
import Login from './routes/login'
import Class from './routes/class'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='teacher/login' element={<Login type='teacher' />} />
      <Route path='student/login' element={<Login type='student' />} />
      <Route path='student/class' element={<Class type='student' />} />
      <Route path='teacher/class' element={<Class type='teacher' />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
