import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from '../pages/login_page'
import GarcomPage from '../pages/garcom_page'
import AdmPage from '../pages/adm_page'

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/garcom" element={<GarcomPage />} />
      <Route path="/adm" element={<AdmPage />} />
    </Routes>
  </BrowserRouter>
)
