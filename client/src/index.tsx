import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppContainer from './routes/app'
import { LoginContainer } from './routes/login'
import ClassContainer from './routes/class'
import DashboardContainer from './routes/dashboard'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppContainer />} />
      <Route path='new-user' element={<LoginContainer role='new-user' />} />
      <Route path='teacher/login' element={<LoginContainer role='teacher' />} />
      <Route path='student/login' element={<LoginContainer role='student' />} />
      <Route path='teacher/class' element={<ClassContainer role='teacher' />} />
      <Route path='student/class' element={<ClassContainer role='student' />} />
      <Route
        path='teacher/dashboard'
        element={<DashboardContainer role='teacher' />}
      />
      <Route
        path='student/dashboard'
        element={<DashboardContainer role='student' />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
