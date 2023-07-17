import { colors } from './Colors';
import { Fonts } from './Fonts';

export const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: colors.background,
  },
  vStack: {
    space: 4,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: colors.elementBackground,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderRadius: 8,
    padding: 16,
    width: '90%',
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
  },
  input: {
    width: '100%',
    marginBottom: 10,
    fontFamily: Fonts.LatoLight,
  },
  button: {
    width: '50%',
    marginTop: 4,
    justifyContent: 'flex-start',
    fontFamily: Fonts.LatoRegular,
  },
};
