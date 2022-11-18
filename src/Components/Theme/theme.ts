export const theme: ITheme = {
  palette: {
    blue: {
      main: '#3f51b5',
      primary: '#2c387e',
      secondary: '#6573c3',
    },
    red: {
      main: '#ff1744',
      primary: '#b2102f',
      secondary: '#ff4569',
    },
    yellow: {
      main: '#ffe082',
      primary: '#ffc107',
      secondary: '#ffc107',
    },

    white: '#FFFFFF',
  },
};

interface IColor {
  main: string;
  primary: string;
  secondary: string;
}
export interface ITheme {
  palette: {
    blue: IColor;
    red: IColor;
    yellow: IColor;
    white: string;
  };
}

export type typeThemePalette = 'blue' | 'red' | 'white' | 'yellow';
