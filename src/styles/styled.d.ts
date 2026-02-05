import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundSecondary: string;
      text: string;
      textSecondary: string;
      button: string;
    };
    fonts: {
      base: string;
    };
  }
}
