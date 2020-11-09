import { createMuiTheme } from "@material-ui/core/styles";
const colorPalette = {
  brown: "#482d0f",
  gold: "#e2af74",
  goldHovered: "#dda25f",
  white: "#ffffff",
  transparent: 'transparent',
  green: '#1c444e',
};

const mainTheme = createMuiTheme({
  palette: {
    primary: { 500: "#467fcf" },
  },
  typography: {
    fontFamily: `'Playfair Display', serif;`,
    fontSize: 16,
  },
  overrides: {
    MuiPaginationItem: {
      page: {
        backgroundColor: colorPalette.transparent,
        color: colorPalette.goldHovered,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colorPalette.goldHovered,

        '&:hover': {
          backgroundColor: colorPalette.green,
          color: colorPalette.goldHovered,
          borderWidth: 1,
          borderColor: colorPalette.goldHovered,
        },
        "&$selected": {
          backgroundColor: colorPalette.gold,
          color: colorPalette.brown,
          '&:hover': {
            backgroundColor: colorPalette.goldHovered,
            color: colorPalette.brown,
          },
        },
      }
    },
  },
});

export default mainTheme;
