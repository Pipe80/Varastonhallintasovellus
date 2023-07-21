import { colors } from '../../themes/Colors';
import { Fonts } from '../../themes/Fonts';

export const styles = {
  card: {
    backgroundColor: colors.white,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderRadius: 8,
    padding: 16,
    width: '80%',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: Fonts.LatoBold, 
  },
  cardContent: {
    fontSize: 14,
    color: colors.text,
    fontFamily: Fonts.LatoRegular,
 }
};
