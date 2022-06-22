import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRoute from './routes/app'
import SigninRoute from './routes/signin'
import LoginRoute from './routes/login'
import ClassRoute from './routes/class'
import SubjectsRoute from './routes/subjects'
import DashboardRoute from './routes/dashboard'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppRoute />} />
      <Route path='signin' element={<SigninRoute />} />
      <Route path='teacher/login' element={<LoginRoute role='teacher' />} />
      <Route path='student/login' element={<LoginRoute role='student' />} />
      <Route path='teacher/class' element={<ClassRoute role='teacher' />} />
      <Route path='student/class' element={<ClassRoute role='student' />} />
      <Route
        path='teacher/subjects'
        element={<SubjectsRoute role='teacher' />}
      />
      <Route
        path='student/subjects'
        element={<SubjectsRoute role='student' />}
      />
      <Route
        path='teacher/dashboard'
        element={<DashboardRoute role='teacher' />}
      />
      <Route
        path='student/dashboard'
        element={<DashboardRoute role='student' />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
