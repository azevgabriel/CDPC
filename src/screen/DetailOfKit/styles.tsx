import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.backgroundWhite,
    paddingTop: "5%",
  },
  wrapperHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 140,
    paddingHorizontal: "5%",    
    marginBottom: 30,
    marginTop: 10
  },
  wrapperHeaderRight: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: "50%",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right"
  },
  text: {
    fontSize: 18,
    color: "black",
    paddingHorizontal: "5%",
    textAlign: "justify",
  },
  amountText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right",
  },
  footer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 'auto',
    height: 60,
    backgroundColor: "#0B6E4F"
  },
  buttonFirst: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "50%",
    height: "100%",
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: "50%",
    height: "100%",
  },
  textButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  }
});