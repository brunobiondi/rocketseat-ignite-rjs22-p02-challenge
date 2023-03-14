import { theme } from '@/layout/theme'
import 'styled-components'

type ThemeType = typeof theme

declare module 'styled-components' {
  export type DefaultTheme = ThemeType
}
