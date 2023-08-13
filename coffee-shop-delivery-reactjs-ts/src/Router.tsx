import { DefaultLayout } from './layout/DefaultLayout'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
