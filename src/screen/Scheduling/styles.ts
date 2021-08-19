import { StyleSheet } from "react-native"
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    content:{
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'auto',
        marginTop: 'auto',
        borderColor: colors.textGreen,
        borderWidth: 2,
        borderRadius: 20,
        padding: "5%",
        backgroundColor: colors.green, 
    },
    text: {
        fontSize: 20,
        color: 'white',
        marginTop: 10,
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "auto",
        width: "100%",
        height: "10%",
        backgroundColor: "#e0e0e0",
    },
    button: {
        width: "55%",
        height: "60%",
        backgroundColor: "#bFbFbF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
    },
    textButton: {
        fontSize: 22,
        fontWeight: "bold",
    },

}); 