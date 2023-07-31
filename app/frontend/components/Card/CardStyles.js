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
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: Fonts.LatoBold, 
  },
  cardContent: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.text,
    fontFamily: Fonts.LatoRegular,
  },
  cardButton: {
    alignItems: 'center',
  }
};
