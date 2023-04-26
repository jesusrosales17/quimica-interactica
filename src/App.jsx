import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Template } from './template/Template'
import { Home } from './views/Home'

export const App = () => {
  return (
   <Routes>
    <Route element={<Template />}>
        <Route path='/' index element={<Home />} />
    </Route>
   </Routes>
  )
}
