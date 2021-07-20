import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: colors.textRed,
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 6,
  },
  image: {
    width: 120,
    height: 50,
  },
  text: {
    fontSize: 15,
    color: colors.textRed,
    fontWeight: "700",
  }
});