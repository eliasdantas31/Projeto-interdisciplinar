import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/loginPage'
import { AdmPage } from '../pages/admPage'
import { GarcomPage } from '../pages/garcomPage'
<<<<<<< HEAD
import { GarcomCategoria } from '../pages/garcomCategoria'
=======
>>>>>>> branch_elias2

import { AdmLayout } from '../pages/admLayout'
import { AdmPedidos } from '../pages/admPedidos'
import { AdmGarcom } from '../pages/admGarcom'
import { AdmCardapio } from '../pages/admCardapio'
import { AdmConfig } from '../pages/admConfig'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/adm" element={<AdmPage />} />
      <Route path="/garcom" element={<GarcomPage />} />
<<<<<<< HEAD
      <Route path="/garcomCategoria" element={<GarcomCategoria />} />
=======
>>>>>>> branch_elias2

      {/* ROTAS ADM ANINHADAS - Layout com Menu + Footer */}
      <Route path="/adm/layout" element={<AdmLayout />}>
        <Route path="pedidos" element={<AdmPedidos />} />
        <Route path="garcom" element={<AdmGarcom />} />
        <Route path="cardapio" element={<AdmCardapio />} />
        <Route path="config" element={<AdmConfig />} />
        {/* outras: config, robo, relatório... */}
      </Route>
    </Routes>
  </BrowserRouter>
)
