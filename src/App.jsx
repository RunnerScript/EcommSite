import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Header from './components/header/Header'
import AppRoutes from './routes/AppRoutes'
import CartProvider from './contexts/cart/CartProvider'
function App() {

  return (
    <>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </>
  )
}

export default App
