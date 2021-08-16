import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: "space-between",
    backgroundColor: colors.backgroundWhite,
  },
  text: {
    fontSize: 17,
    paddingHorizontal: 3,
    color: colors.textGreen,
  },
  textRight: {
    fontSize: 17,
    paddingHorizontal: 3,
    color: colors.textGreen,
    paddingVertical: 2,
  },
  textLabel: {
    fontSize: 17,
    paddingHorizontal: 3,
    color: colors.textGreen,
    marginTop: 5,
  },
  textInput: {
    fontSize: 17,
    height: 40,
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 2,
    marginVertical: 1,
    paddingHorizontal: 5,
  },
  image: {
    marginTop: 60,
    width: 175,
    height: 225,
  },
  row: {
    flexDirection: 'column',
    marginTop: 10
  },
  rowRight: {
    width: "100%",
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  button: {
    marginVertical: 5,
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 18,
    color: colors.white,
    alignSelf: 'center'
  },
  inputContainer:{
    paddingHorizontal: 50,
    width: "100%",
  },
  link: {
    width: "100%",
  },
  textRed: {
    color: colors.textRed,
    fontSize: 19,
    fontWeight: "700",
    textAlign: 'center',
  },
  buttonFAQ: {
    marginBottom: 30,
  }
})