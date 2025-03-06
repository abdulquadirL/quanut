import { extendTheme } from "@chakra-ui/theme-utils";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: "#f5fdfb",
      100: "#dbf8f1",
      200: "#b3f0e0",
      300: "#81e6ce",
      400: "#4ddbb9",
      500: "#26cda2",
      600: "#1da58b",
      700: "#187e6e",
      800: "#115b52",
      900: "#0a3a36",
    },
  },
});

export default theme;

