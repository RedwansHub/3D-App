import { StyleSheet } from "react-native";
import colors from "../../themes/colors";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    flexDirection: "row",
    width: "85%",
    backgroundColor: colors.button,
    alignSelf: "center",
    borderRadius: 5,
    justifyContent:"center",
    alignItems:"center",
    elevation: 15,
  },
  label: {
    fontSize:16,
    letterSpacing:1.5,
    color: colors.background,
    fontWeight: "600"
  },
  primary:colors.light_primary,
  secondry:colors.text_light
});
export default styles;
