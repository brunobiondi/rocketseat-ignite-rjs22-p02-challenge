import { GlobalStyles } from '@/layout/GlobalStyles'
import { theme } from '@/layout/theme'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ProductsContextProvider } from './contexts/ProductsContext'
import { AppRoutes } from './routes'

export function App() {
  return (
    <ProductsContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </ProductsContextProvider>
  )
}
