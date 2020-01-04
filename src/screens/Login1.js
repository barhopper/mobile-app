import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Keyboard,
    Animated,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import HUD, {LoadingHUD} from "react-native-hud-hybrid";
import apiservice from '../firebase/FirebaseHelper';
import images from "./../../assets/images";
import colors from "./../../assets/Colors";
import config from "../../assets/Config";
import AsyncStorage from "@react-native-community/async-storage";
import {CURRENT_USER} from "../constants/Storage-key";
import {NavigationActions, StackActions} from "react-navigation";
import firebase from "react-native-firebase";

export default class Login1 extends Component {

    constructor(props) {
        super(props);

        this.loadingHUD = new LoadingHUD();
        this.state = {
            showPass: true,
            email: '',
            password: '',
            animation: new Animated.Value(0),
        };
    }

    componentDidMount() {
        HUD.config({
            loadingText: "Loading ..."
        });
    }

    componentWillMount() {
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this.keyboardDidHide
        );
    }

    componentWillUnmount() {
        this.keyboardDidHideListener.remove();
    }

    keyboardDidHide = () => {
        this.stopAnimation();
    };

    startAnimation() {
        let value = Platform.OS === 'android' ? -hp('20%') : -hp('19%');
        Animated.timing(this.state.animation, {
            duration: 250,
            toValue: value,
            useNativeDriver: true
        }).start();
    }

    stopAnimation() {
        Animated.timing(this.state.animation, {
            duration: 250,
            toValue: 0,
            useNativeDriver: true
        }).start();
    }

    onLogin = async () => {
        const { email, password } = this.state;
        this.loadingHUD.show();
        let resp = await apiService.loginHelper(email, password);
        let uid = resp._user.uid;
        if(resp.code === 'auth/user-not-found' || resp.code === 'auth/invalid-email') {
            this.loadingHUD.hideAll();
            alert(resp.message);
        } else {
            let data = await apiService.checkDriver(uid);
            if (data.driver) {
                this.loadingHUD.hideAll();
                // this.props.setUserInfo(resp);
                firebase.messaging().getToken().then(async fcmToken => {
                    await apiservice.updateFcmToke(uid, fcmToken);
                });
                AsyncStorage.setItem(CURRENT_USER, JSON.stringify(resp));
                const navigateAction = StackActions.reset({
                    index: 0,
                    routeName: 'HomeStack',
                    actions: [NavigationActions.navigate({routeName: 'HomeStack'})]
                });
                this.props.navigation.dispatch(navigateAction);
            } else {
                this.loadingHUD.hideAll();
                alert('Invalid username and password, please try again');
            }
        }
    };

    render() {
        const animationStyles = {
            transform: [
                {
                    translateY: this.state.animation
                }
            ]
        };
        return (
            <View style={styles.backgroundImage}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : null}
                    style={styles.container}
                >
                    <SafeAreaView style={{flexDirection: 'column',marginTop:Platform.OS==='ios'?20:hp('2%') }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginRight: wp('80%'),
                                marginTop: hp('2%')
                            }}
                        >
                            <View style={{}}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                    <Image
                                        style={{width: wp(config.h_b_b_w), height: hp(config.h_b_b_h)}}
                                        source={images.back}
                                        resizeMode='contain'
                                    /></TouchableOpacity>
                            </View>
                        </View>
                    </SafeAreaView>

                    <View style={styles.imageContainer}>
                        <Image style={{width: wp('30%') }} source={images.splash_image} resizeMode='contain'/>
                    </View>


                    <Animated.View style={[styles.fieldsContainer, animationStyles]}>
                        <View
                            style={{
                                height: 40,
                                borderBottomWidth: 1,
                                borderBottomColor: 'gray',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10,
                                marginTop: hp('5%')
                                // marginVertical: 5,
                            }}
                        >
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor = "gray"
                                style={styles.textInput}
                                keyboardType="email-address"
                                onChangeText={email => this.setState({ email })}
                                underlineColorAndroid="transparent"
                                returnKeyType={'next'}
                                onSubmitEditing={() => {
                                    this.emailTextInput.focus();
                                }}
                            />
                        </View>
                        <View style={{marginTop: hp('2%')}}>
                            <View
                                style={{
                                    height: 40,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'gray',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                    marginBottom: hp('2%')
                                }}
                            >
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor = "gray"
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    underlineColorAndroid="transparent"
                                    value={this.state.password}
                                    onChangeText={(text) => this.setState({password:text})}
                                    ref={input => {
                                        this.emailTextInput = input;
                                    }}
                                    onFocus={() => {
                                        this.startAnimation();
                                    }}
                                    onBlur={() => {
                                        this.stopAnimation();
                                    }}

                                />

                            </View>

                        </View>
                        <TouchableOpacity
                            style = {{
                                width: wp('70%'),
                                height: hp('7%'),
                                backgroundColor: colors.blue,
                                alignSelf:'center',
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:5,
                                marginTop: wp('1%')
                            }}
                            onPress={()=>this.onLogin()}
                        >
                            <Text style={{color:colors.white,fontSize:wp('5%')}}>LOGIN</Text>
                        </TouchableOpacity>

                    </Animated.View>
                    {/*<View style={styles.containerOne}>*/}

                    {/*    <Image*/}
                    {/*        source={images.fb}*/}
                    {/*        style={{height: wp('15%'), marginBottom: hp('1%'), width: '100%', borderRadius: 5}}*/}
                    {/*        resizeMode='contain'*/}
                    {/*    />*/}



                    {/*    <Image*/}
                    {/*        source={images.g_plus}*/}
                    {/*        style={{height: wp('15%'), marginBottom: 20, width: '100%', borderRadius: 5}}*/}
                    {/*        resizeMode='contain'*/}
                    {/*    />*/}

                    {/*</View>*/}
                    {/*<TouchableOpacity*/}
                    {/*    style = {{*/}
                    {/*        width: wp('70%'),*/}
                    {/*        height: hp('7%'),*/}
                    {/*        alignSelf:'center',*/}
                    {/*        justifyContent:'center',*/}
                    {/*        alignItems:'center',*/}
                    {/*        borderRadius:5,*/}
                    {/*        marginBottom: hp('10%')*/}
                    {/*    }}*/}

                    {/*    onPress={()=>this.props.navigation.navigate('SignUp')}*/}
                    {/*>*/}
                    {/*    <Text style={{color:colors.white,fontSize:wp('4%')}}>Dont have an account?</Text>*/}
                    {/*</TouchableOpacity>*/}

                </KeyboardAvoidingView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.blue
    },
    container: {

        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        justifyContent: 'center',
        height: hp('35%'),
        marginTop: hp('10%')
    },
    fieldsContainer: {
        width: '85%',
        height: wp('60%'),
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: colors.white,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    loginButtonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('10%')
    },
    textInput: {
        // height: 40,
        // borderColor: colors.white,
        // borderWidth: 1,
        // paddingLeft: 10,
        // borderRadius: 5,
        // backgroundColor: colors.text_input_bg_color,
        color: colors.black,
        flex: 1,
        height: 40
    },
    textInputContainer: {
        borderColor: colors.white,
        backgroundColor: colors.text_input_bg_color,
        borderRadius: 5,
        borderWidth: 1,
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        flex: 1,
        paddingLeft:10,
        color:colors.white
    },
    inputIcon: {
        width: wp('5%'),
        height: wp('5%'),
        marginRight: 15
    },
    containerOne: {
        // flex: 3,
        width: '80%',
        // backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: wp('2%'),
        paddingLeft: wp('2%'),
        marginTop: hp('3%')
    },
});
