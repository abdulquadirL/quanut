import { extendTheme } from '@chakra-ui/react';
import { MultiSelectTheme } from 'chakra-multiselect';

const fonts = {
  body: '"NexaRegular"',
  heading: '"NexaBold"',
};

const colors = {
  brand: {
    900: '#808080',
    800: '#387A3B',
    700: '#96C63D',
  },
};

const customTheme = extendTheme({
  fonts,
  colors,
  components: {
    MultiSelect: MultiSelectTheme,
  },
});

export default customTheme;
