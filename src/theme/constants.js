export const COLORS = {

    primary: "205deg",
    gray: "270deg",
    //primary: "hsl(205deg 100% 67%)",
    //primaryLight: "hsl(205deg 100% 72%)",
    //white: "hsl(0deg 0% 100%)",
    offwhite: "hsl(235deg 85% 97%)",
    //gray: "hsl(0deg 0% 60%)",
    //transparentGray15: "hsl(240deg 10% 50% / 0.15)",
    //transparentGray75: "hsl(240deg 10% 50% / 0.75)",
    //black: "hsl(0deg 0% 0%)"
  };  

  export const BREAKPOINTS = {
    tabletMin: 550,
    laptopMin: 1100,
    desktopMin: 1500,
  };

  export const QUERIES = {
    /* pixel-based media queries
    'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin}px)`,
    'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin}px)`,
    'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin}px)`,
    */
    'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  };