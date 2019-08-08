//Libraries
import { Dimensions, Platform } from "react-native";
//Constants
const deviceWidth = Dimensions.get("window").width;
const isAndroid = Platform.OS === "android";
const isIOS = Platform.OS === "ios";

export default {
  mainContainer: {
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center"
  },
  rememberTextStyle: {
    fontSize: 16,
    color: "rgba(117,117,117,1)"
  }
};
