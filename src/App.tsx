import { GlobalStyles } from '@/layout/GlobalStyles'
import { theme } from '@/layout/theme'
import { ThemeProvider } from 'styled-components'
import { Banner } from './components/Banner'
import { Header } from './components/Header'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Banner />
      <GlobalStyles />
    </ThemeProvider>
  )
}
