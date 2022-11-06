import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Products } from '@/components/Products'
import { GlobalStyles } from '@/layout/GlobalStyles'
import { theme } from '@/layout/theme'
import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <Products />
      <GlobalStyles />
    </ThemeProvider>
  )
}
