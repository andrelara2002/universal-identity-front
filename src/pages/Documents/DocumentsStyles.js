import { StyleSheet } from "react-native";

export default function DocumentsStyles(colors) {
  const { background } = colors;

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: background,
    },
    containerData: {
      display: 'flex',
      flexDirection: "row",
      flexWrap: "wrap",
      gap: '12px'
    },
    viewContentModal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    viewModal: {
      display: "flex",
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(4,4,4, 0.40)",
      justifyContent: "center",
      alignItems: "center"
    },
    qrCodeModal: {
      width: '220px',
      height: '220px',
      borderRadius: '10px'
    },
    qrCode: {
      width: '120px',
      height: '120px'
    },
    containerImage: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dividedView: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginTop: 0,
      marginBottom: 0,
      padding: 0
    }
  });
}