import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Platform,
    Keyboard,
    Animated,
    SafeAreaView,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import HUD, {LoadingHUD} from "react-native-hud-hybrid";
import apiService from '../firebase/FirebaseHelper';
import images from "../../assets/images";
import colors from "../../assets/Colors";
import config from "../../assets/Config";
import firebase from "react-native-firebase";
import AsyncStorage from "@react-native-community/async-storage";
import {CURRENT_USER} from "../constants/Storage-key";

export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.loadingHUD = new LoadingHUD();
        this.state = {
            password: '',
            re_password: '',
            email: '',
            username: '',
            animation: new Animated.Value(0),
        };
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

    onSignUp = () => {
        console.log('onSignUp');
        const { password, re_password, email, username } = this.state;
        if(password === re_password) {
            this.loadingHUD.show();
            apiService.signUpWith(email, password, (resp) => {
                console.log('USER-RESP---->>>', resp);
                if(resp.isSuccess) {
                    firebase.messaging().getToken().then((fcmToken) => {
                        console.log('FCM-TOKEN--->>', fcmToken);
                        apiService.setProfileForUser(username,email,fcmToken, (res) => {
                            if(res.isSuccess) {
                                this.loadingHUD.hideAll();
                                // this.props.setUserInfo(resp);
                                this.props.navigation.navigate('Home');
                            } else {
                                firebase.auth().signOut().done();
                                AsyncStorage.removeItem(CURRENT_USER);
                            }
                        });
                    });
                } else {
                    this.loadingHUD.hideAll();
                    setTimeout(() => {
                        alert(resp.message);
                    }, 500);
                }
                // if(resp.code === 'auth/email-already-in-use' || resp.code === 'auth/invalid-email') {
                //     this.loadingHUD.hideAll();
                //     alert(resp.message);
                // } else {
                //     firebase.messaging().getToken().then(async fcmToken => {
                //         console.log('FCM-TOKEN--->>', fcmToken);
                //         await apiService.setProfileForUser(email, username, resp);
                //     });
                //     this.loadingHUD.hideAll();
                //     // this.props.setUserInfo(resp);
                //     this.props.navigation.navigate('Home');
                // }
            });
        } else {
             // this.loadingHUD.hideAll();
            alert('password did not match, please try again')
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
            <View style={{ flex: 1 }}>
                <View style={{
                    height: hp('25%'),
                    width: '100%',
                    backgroundColor: colors.blue
                }}>
                    <SafeAreaView style={{flexDirection: 'column',marginTop:Platform.OS==='ios'?20:hp('2%') }}>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{flex: 1, marginLeft: wp('2%')}}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                    <Image
                                        style={{width: wp(config.h_b_b_w), height: hp(config.h_b_b_h)}}
                                        source={images.back}
                                        resizeMode='contain'
                                    /></TouchableOpacity>
                            </View>
                            <View style={{alignItems: 'center', marginRight: wp('38%'), bottom: 5 }}><Text
                                style={{color: colors.white, fontSize: wp(config.h_t_f_s)}}>Sign Up</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                marginTop: hp('5%')
                            }}
                        >
                            <Text style={{ color: colors.white}}>Please fill your information</Text>
                            <Text style={{ color: colors.white}}>to complete your account registration</Text>
                        </View>
                    </SafeAreaView>
                </View>
                <Animated.View style={[styles.container, animationStyles]}>
                    <View style={styles.fieldsContainer}>
                        <View
                            style={{
                                height: 40,
                                borderBottomWidth: 1,
                                borderBottomColor: 'gray',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 10,
                                marginVertical: 10
                            }}
                        >
                            <TextInput
                                placeholder="User Name"
                                placeholderTextColor = "gray"
                                style={styles.textInput}
                                keyboardType="email-address"
                                returnKeyType={'next'}

                                onSubmitEditing={() => {
                                    this.emailTextInput.focus();
                                }}
                                onChangeText={username => this.setState({ username })}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{marginTop: 15}}>
                            <View
                                style={{
                                    height: 40,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'gray',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                    marginVertical: 10
                                }}
                            >
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor = "gray"
                                    keyboardType="email-address"
                                    style={styles.textInput}
                                    returnKeyType={'next'}
                                    ref={input => {
                                        this.emailTextInput = input;
                                    }}
                                    onFocus={() => {
                                        this.startAnimation();
                                    }}
                                    onBlur={() => {
                                        this.stopAnimation();
                                    }}
                                    onSubmitEditing={() => {
                                        this.passwordTextInput.focus();
                                    }}
                                    underlineColorAndroid="transparent"
                                    onChangeText={email => this.setState({ email })}

                                />

                            </View>

                        </View>
                        <View style={{marginTop: 15}}>
                            <View
                                style={{
                                    height: 40,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'gray',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                    marginVertical: 10
                                }}
                            >
                                <TextInput
                                    placeholder="Password"
                                    placeholderTextColor = "gray"
                                    returnKeyType={'next'}
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    ref={input => {
                                        this.passwordTextInput = input;
                                    }}
                                    onFocus={() => {
                                        this.startAnimation();
                                    }}
                                    onBlur={() => {
                                        this.stopAnimation();
                                    }}
                                    onSubmitEditing={() => {
                                        this.rePasswordTextInput.focus();
                                    }}
                                    underlineColorAndroid="transparent"
                                    onChangeText={password => this.setState({ password })}

                                />

                            </View>
                        </View>
                        <View style={{marginTop: 15}}>
                            <View
                                style={{
                                    height: 40,
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'gray',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    padding: 10,
                                    marginVertical: 10
                                }}
                            >
                                <TextInput
                                    placeholder="Re-enter Password"
                                    placeholderTextColor = "gray"
                                    style={styles.textInput}
                                    secureTextEntry={true}
                                    ref={input => {
                                        this.rePasswordTextInput = input;
                                    }}
                                    onFocus={() => {
                                        this.startAnimation();
                                    }}
                                    onBlur={() => {
                                        this.stopAnimation();
                                    }}
                                    underlineColorAndroid="transparent"
                                    onChangeText={re_password => this.setState({ re_password })}

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
                                marginTop: wp('7%')
                            }}
                            onPress={()=> this.onSignUp()}
                        >
                            <Text style={{color:colors.white,fontSize:wp('5%')}}>SIGN UP</Text>
                        </TouchableOpacity>

                    </View>
                </Animated.View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    containerKeyboard: {
        height: hp('100%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: hp('5%')
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center'
    },
    fieldsContainer: {
        width: '85%',
        height: wp('65%'),
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:hp('10%')
    },
    textInput: {
        color: colors.black,
        flex: 1,
        height: 40
    },
});
