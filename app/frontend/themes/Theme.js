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
  styles: {
    global: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
      fontFamily: Fonts.LatoRegular,
    },
    
  },
  components: {
    Flex: {
      baseStyle: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        backgroundColor: colors.background,
        gap: 3,
      },
      Stack: {
        space: 4,
        justifyContent: 'center',
        width: "75%"
      }
    },
  },
});
