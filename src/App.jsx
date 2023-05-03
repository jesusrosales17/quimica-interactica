import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Template } from './template/Template'
import { HomePage, PeriodicTablePage, AhorcadoPage, QuizPage, MemoriaPage } from './views'

export const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Template />}>
        <Route  index element={<HomePage />} />
        <Route path='/tablaperiodica' element={<PeriodicTablePage />} />
        <Route path='/ahorcado' element={<AhorcadoPage />} />
        <Route path='/memoria' element={<MemoriaPage />} />
        <Route path='/quiz' element={<QuizPage />} />
    </Route>
   </Routes>
  )
}
