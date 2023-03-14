import { GlobalStyles } from '@/layout/GlobalStyles';
import { theme } from '@/layout/theme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ShopContextProvider } from './contexts/Shop/ShopContext';
import { AppRoutes } from './routes';

export function App() {
  return (
    <ShopContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </ShopContextProvider>
  );
}
