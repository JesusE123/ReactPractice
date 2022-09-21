import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle `
  body {
    background: ${(props) => props.theme.backgroundColor};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    `

