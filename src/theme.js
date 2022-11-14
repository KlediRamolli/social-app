import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#d4c1ff",
      100: "#c0a6fe",
      200: "#ae8dfc",
      300: "#9c75f8",
      400: "#8b5cf6",
      500: "#7f4ff2",
      600: "#7644ec",
      700: "#6d39e6",
      800: "#6430df",
      900: "#5c27d7",
    },
    lightPrimary: {
      500: "#97d2fb",
    },
    accent: {
      500: "#eccbd9",
    },
    black: {
      500: "#1f1f1f",
    },
    darkGray: {
      500: "#393939",
    },
    gray: {
      500: "#e1eff6",
    },
    red: "#ff595e",
    yellow: "#ffca3a",
    green: { 500: "#8ac926" },
    blue: "#1982c4",
    purple: "#6a4c93",
    textDark: "#04021d",
  },
  components: {
    Text: {
      variants: {
        header: {
          fontSize: 18,
          fontWeight: "600",
          lineHeight: 27,
        },
        headerBigTitle: {
          fontSize: 24,
          fontWeight: "600",
          lineHeight: 36,
        },
        title: {
          fontSize: 16,
          fontWeight: "500",
          lineHeight: 24,
        },
        subtitle: {
          fontSize: 16,
          fontWeight: "400",
          lineHeight: 20,
        },
        content: {
          fontSize: 13,
          fontWeight: "400",
          lineHeight: 18,
        },
      },
    },
    Button: {
      baseStyle: {
        rounded: "full",
        pt: 1,
        pb: 1,
      },
      defaultProps: {
        colorScheme: "primary",
      },
      variants: {
        outline: {
          rounded: "full",
        },
        solid: {
          textAlign: "center",
        },
      },
    },
  },
});

export default theme;
