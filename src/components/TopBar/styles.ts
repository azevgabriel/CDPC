import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.backgroundWhite,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 22,
    color: colors.textGreen,
  },
  textStrong: {
    fontSize: 22,
    color: colors.textGreen,
    fontWeight: 'bold',
  },
  rightContainer: {
    height: 80,
    width: 80,
  }
});