import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundWhite,
  },
  scroll: {
    minHeight: 30,
    maxHeight: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 5,
    backgroundColor: colors.green,
    borderRadius: 20,
  },
  textButton: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "700",
  },
  content: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  }
});