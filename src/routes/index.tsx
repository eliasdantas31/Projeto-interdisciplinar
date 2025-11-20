import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/loginPage' // export default
import { GarcomPage } from '../pages/garcomPage' // export named
import { AdmPage } from '../pages/admPage' // export named
import { CardapioADM } from '../pages/cardapioADM' // export named

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/garcom" element={<GarcomPage />} />
      <Route path="/adm" element={<AdmPage />} />
      <Route path="/cardapio-adm" element={<CardapioADM />} />
    </Routes>
  </BrowserRouter>
)
