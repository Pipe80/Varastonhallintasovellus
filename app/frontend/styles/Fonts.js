import * as Font from 'expo-font';

// Imports
import LatoBold from '../assets/fonts/Lato-Bold.ttf';
import LatoLight from '../assets/fonts/Lato-Light.ttf';
import LatoRegular from '../assets/fonts/Lato-Regular.ttf';

// Define the font names as constants
export const Fonts = {
  LatoBold: 'Lato-Bold',
  LatoLight: 'Lato-Light',
  LatoRegular: 'Lato-Regular',
};

// Load the fonts
export const loadFonts = async () => {
  await Font.loadAsync({
    [Fonts.LatoBold]: LatoBold,
    [Fonts.LatoLight]: LatoLight,
    [Fonts.LatoRegular]: LatoRegular,
  });
};
