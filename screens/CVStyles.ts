import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      paddingRight: 10,
      paddingLeft: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    separator: {
      marginVertical: 30,
      height: 1,
    },
    contentText: {
      fontSize: 17,
      lineHeight: 24,
      textAlign: "justify",
      paddingLeft: 20,
      paddingRight: 20,
    },
    firstName: {
      fontSize: 24,
      fontWeight: "700",
    },
    lastName: {
      fontSize: 24,
      fontWeight: "700",
    },
    titleRibbon: {
      backgroundColor: "darkblue",
      color: "white",
      width: "100%",
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 5,
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 5,
      shadowRadius: 3,
      shadowColor: "grey",
      fontSize: 25,
    },
    content: {
      fontSize: 15,
      fontWeight: "500",
    },
    contentFullWidth: {
      fontSize: 15,
      fontWeight: "500",
      width: "100%",
    },
    contentBreak: {
      fontSize: 14,
      fontWeight: "500",
    },
    contentTitle: {
      fontSize: 22,
      fontWeight: "900",
    },
    italicTitle: {
      fontSize: 13,
    },
    ratedContentContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: "500",
    },
    ratedContentContainerWithTopSpacing: {
      flex: 1,
      flexGrow: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      fontWeight: "500",
      marginTop: 10,
    },
    contentLeftSectionRating: {
      flex: 1,
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between",
      textAlign: "right",
    },
    smallContent: {
      fontSize: 14,
      textAlign: "left",
    },
    smallContentPadded: {
      padding: 20,
      fontSize: 14,
      textAlign: "left",
    },
    titleSeparators: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 14,
      marginBottom: 9,
      color: "darkblue",
      alignSelf: "center",
    },
    rightTable: {
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "column",
      alignItems: "stretch",
    },
    rightTableRow: {
      flex: 1,
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-around",
      textAlign: "left",
      marginBottom: 5,
    },
    rowTitle: {
      flex: 1,
      flexWrap: "wrap",
      flexDirection: "row",
      alignItems: "center",
    },
    leftColumn: {
      width: "15%",
      paddingTop: 10,
      paddingBottom: 10,
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
      borderRightColor: "grey",
      borderLeftColor: "transparent",
      fontSize: 13,
    },
    rightColumn: {
      width: "85%",
      paddingRight: 10,
      paddingLeft: 10,
    },
  });
  