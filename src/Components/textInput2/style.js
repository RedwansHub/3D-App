import { StyleSheet } from "react-native";
import colors from "../../themes/colors";
const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginBottom: 20,
    flexDirection: "row",
    width: "85%",
    backgroundColor: colors.background,
    alignSelf: "center",
    minHeight: 55,
    borderRadius: 5,
    elevation: 15,
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "12%",
  },
  labelTextContainer: {
    width: "88%",
    justifyContent: "center",
  },
  label: {
    marginLeft: 12,
    color: colors.text_light,
    fontWeight: "600",
  },
  textInput: {
    marginLeft: 12,
    color: colors.primary,
    fontWeight: "bold",
  },
  primary:colors.primary,
  secondry:colors.text_light
});
export default styles;
 