import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './app'
import Login from './login/login'
import Class from './class/class'
import Dashboard from './dashboard/dashboard'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='new-user' element={<Login role='new-user' />} />
      <Route path='teacher/login' element={<Login role='teacher' />} />
      <Route path='student/login' element={<Login role='student' />} />
      <Route path='teacher/class' element={<Class role='teacher' />} />
      <Route path='student/class' element={<Class role='student' />} />
      <Route path='teacher/dashboard' element={<Dashboard role='teacher' />} />
      <Route path='student/dashboard' element={<Dashboard role='student' />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
