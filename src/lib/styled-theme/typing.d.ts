import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: `rgb(0, 121, 211)`;
    primaryHover: `rgb(0, 105, 300)`;
    secondary: 'rgb(100, 100, 355)';
    secondaryHover: 'rgb(1, 100, 355)';
  }
}
