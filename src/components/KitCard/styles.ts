import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: "27.5%",
    height: 110,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: ".2%",
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 50,
  },
  text: {
    fontSize: 15,
    color: "white",
    fontWeight: "700",
  }
});