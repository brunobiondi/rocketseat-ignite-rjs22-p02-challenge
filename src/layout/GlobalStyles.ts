import { ThemeType } from '@/@types/styled';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-smooth: antialiased;
    font-weight: 400;
    text-decoration: none;
    list-style-type: none;
  }
  body {
    background-color: ${(props) => props.theme.colors.base.background};
  }
`;
