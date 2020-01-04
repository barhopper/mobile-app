import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import { fromRight } from 'react-navigation-transitions';
import Splash from "./Splash";
import Header from "../common/Header";
import PlaceComponent from "../common/PlaceComponent";
import HomeScreen from "./HomeScreen";
import InputComponent from "../common/InputComponent";
import SimpleButton from "../common/SimpleButton";
import MapScreen from "./MapScreen";
import Following from "./Following";
import RateBar from "./RateBar";
import SignUpWith from "./SignUp/SignUpWith";
import Signup from "./SignUp/Signup";
import Login from "./SignUp/Login";
import ResetPassword from "./SignUp/ResetPassword";
import NewPassword from "./SignUp/NewPassword";
import EmailConfirm from "./SignUp/EmailConfirm";
import AccountVerified from "./SignUp/AccountVerified";
import Setting from "./Setting/Setting";
import About from "./SignUp/About";
import RateApp from "./SignUp/RateApp";
import Report from "./SignUp/Report";
import Terms from "./SignUp/Terms";
import AccountSetting from "./SignUp/AccountSetting";
import Privacy from "./SignUp/Privacy";
import BarDetail from "./BarDetail";
import FollowingComponent from "../common/FollowingComponent";
import PromotionComponent from "../common/PromotionComponent";
import PromotionFeed from "./PromotionFeed";
import PromoDetails from "./PromoDetails";
import Response from "./Response";
import VideoScreen from "./VideoScreen";
import Search from "./Search";
import Search2 from "./Search2";
import Notification from "./Notification";
import CheckIn from "./CheckIn";
import HomeHeader from "../common/HomeHeader";
import IconButton from "../common/IconButton";
import RadioButton from "../common/RadioButton";
import MapButton from "../common/MapButton";
import CheckBox from "../common/CheckBox";


export const RootStack = createStackNavigator(
    {
        Splash: {
            screen: Splash
        },
        AccountSetting: {
            screen: AccountSetting,
        },
        SimpleButton:{
            screen: SimpleButton,
        },
        IconButton:{
            screen: IconButton,
        },
        Terms: {
            screen: Terms,
        },
        Report: {
            screen: Report,
        },
        Privacy: {
            screen: Privacy,
        },
        RateApp: {
            screen: RateApp,
        },
        About: {
            screen: About,
        },
        Search: {
            screen: Search,
        },
        Search2: {
            screen: Search2,
        },
        Setting: {
            screen: Setting,
        },
        AccountVerified: {
            screen: AccountVerified,
        },
        EmailConfirm: {
            screen: EmailConfirm,
        },
        NewPassword: {
            screen: NewPassword,
        },
        ResetPassword: {
            screen: ResetPassword,
        },
        Login: {
            screen: Login,
        },
        Signup: {
            screen: Signup,
        },
        RateBar: {
            screen: RateBar,
        },
        SignWith: {
            screen: SignUpWith,
        },
        Following: {
            screen: Following,
        },
        BarDetail: {
            screen: BarDetail,
        },
        MapScreen: {
            screen: MapScreen,
        },
        Input: {
            screen: InputComponent,
        },
        HomeScreen: {
            screen: HomeScreen,
        },
        PlaceComponent: {
            screen: PlaceComponent,
        },
        FollowingComponent: {
            screen: FollowingComponent,
        },
        PromotionComponent: {
            screen: PromotionComponent,
        },
        PromotionFeed: {
            screen: PromotionFeed,
        },
        PromoDetails: {
            screen: PromoDetails,
        },
        Response: {
            screen: Response,
        },
        VideoScreen: {
            screen: VideoScreen,
        },
        Notification: {
            screen: Notification,
        },
        CheckIn: {
            screen: CheckIn,
        },
        Header: {
            screen: Header,
        },
        HomeHeader: {
            screen: HomeHeader,
        },
        RadioButton: {
            screen: RadioButton
        },
        CheckBox: {
            screen: CheckBox
        },
        MapButton: {
            screen: MapButton
        },
    },
    {
        defaultNavigationOptions: {},
        initialRouteName: "Splash",
        headerMode: "null",
        transitionConfig: () => fromRight(),
        // transitionConfig: nav => handleCustomTransition(nav)
    }
);

export default createAppContainer(RootStack);
