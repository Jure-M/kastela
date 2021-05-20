const defaultTheme = {
  colors: {
    black: "#000",
    blackLight: "#303739",
    white: "#fff",
    blue: "#505aad",
    gray100: "#efefef",
    gray200: "#d7d7d7",
    gray300: "#b2b2b2",
    gray400: "#7d7d7d",
    gray500: "#4e4e4e",
    vibes: "#e6ede4",
    stylish: "#d6f3fc",
    modern: "e7e7e7",
  },
  fonts: {
    logo: '"Port Lligat Sans", sans-serif',
    display: '"Playfair Display", serif',
    normal: '"Nanum Gothic", sans-serif',
  },
};

export type ThemeType = typeof defaultTheme;

export default defaultTheme;
