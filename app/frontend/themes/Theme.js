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

    
  },
  components: {
    Flex: {
      baseStyle: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        backgroundColor: colors.background,
        fontFamily: Fonts.LatoRegular,
        gap: 3,
      },
      Input: {
        width: "80%"
      }
    },
    Stack: {
      space: 4,
      justifyContent: 'center',
      alignItems: 'center',
      width: "75%"
    },
    Input: {
      width: "50%"
    }
  },
});
