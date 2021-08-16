import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        paddingBottom: 10,
        height: "14%",
        backgroundColor: "#2E4057",
        paddingHorizontal: "5%",
    },
    svg: {
        marginBottom: 4,
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        color: colors.white,
    },
    wrapperBody: {
        width: "100%",
        height: "100%",
    },
    body: {
        width: "100%",
        height: "76%",
        backgroundColor: "#CFCFCF",
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "10%",
        backgroundColor: "#2E4057",
    },
    button: {
        width: "55%",
        height: "60%",
        backgroundColor: "#CFCFCF",
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