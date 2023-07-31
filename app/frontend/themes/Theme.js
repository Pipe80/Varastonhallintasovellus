import { extendTheme } from 'native-base';
import { colors } from './Colors';
import { Fonts, loadFonts } from './Fonts';

// Load the custom fonts
loadFonts();

export const theme = extendTheme({
  colors: {
    ...colors,
  },
  fonts: {
    'Lato-Light': Fonts.LatoLight,
    'Lato-Regular': Fonts.LatoRegular,
    'Lato-Bold': Fonts.LatoBold,
  },
  components: {
    Flex: {
      baseStyle: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
        backgroundColor: colors.background,
        fontFamily: Fonts.LatoRegular,
        gap: 3,
      },
    },
    Button: {
      baseStyle: {
        width: "80%",
      }
    },
    Input: {
      baseStyle: {
        width: "80%",
      },
    },
  },
});
