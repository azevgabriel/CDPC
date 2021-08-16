import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 14,
    borderWidth: 3,
    backgroundColor: "#E3E3E3",
    borderRadius: 15,
  },
  text: {
    fontSize: 18,
    color: "#222",
  }
});