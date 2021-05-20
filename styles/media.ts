const size = {
  tablet: "37.5em", // 600px
  tabLand: "56.25em", // 900px
  desktop: "75em", // 1200px
  desktopLarge: "112.5em", // 1800px
};

export const device = {
  tablet: `(min-width: ${size.tablet})`,
  tabLand: `(min-width: ${size.tabLand})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopLarge: `(min-width: ${size.desktopLarge})`,
};
