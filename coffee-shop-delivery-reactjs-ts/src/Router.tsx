import { DefaultLayout } from './layout/DefaultLayout'
import { Routes, Route } from 'react-router-dom'
import { Shopping } from './pages/Shopping'
import { Cart } from './pages/Cart'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Shopping />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}
