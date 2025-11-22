import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/loginPage'
import { AdmPage } from '../pages/admPage'
import { GarcomPage } from '../pages/garcomPage'

import { AdmLayout } from '../pages/admLayout'
import { AdmPedidos } from '../pages/admPedidos'
import { AdmGarcom } from '../pages/admGarcom'
import { AdmCardapio } from '../pages/admCardapio'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admPage" element={<AdmPage />} key="adm" />
      <Route path="/garcomPage" element={<GarcomPage />} />

      {/* ROTAS ADM ANINHADAS */}
      <Route path="layout" element={<AdmLayout />}>
        <Route path="pedidos" element={<AdmPedidos />} />
        <Route path="garcom" element={<AdmGarcom />} />
        <Route path="cardapio" element={<AdmCardapio />} />
        {/* outras: config, robo, relatório... */}
      </Route>
    </Routes>
  </BrowserRouter>
)
