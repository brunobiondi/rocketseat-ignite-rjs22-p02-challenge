import { GlobalStyles } from '@/layout/GlobalStyles'
import { theme } from '@/layout/theme'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/Cart/CartContext'
import { ProductsContextProvider } from './contexts/Products/ProductsContext'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
          <GlobalStyles />
        </ThemeProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  )
}
