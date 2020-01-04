import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import colors from '../../assets/Colors';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {AccessToken, LoginManager} from "react-native-fbsdk";
import firebase from "react-native-firebase";
import {GoogleSignin} from "@react-native-community/google-signin";
import apiService from "../firebase/FirebaseHelper";
import AsyncStorage from "@react-native-community/async-storage";
import {CURRENT_USER} from "../constants/Storage-key";
import HUD, {LoadingHUD} from "react-native-hud-hybrid";
import {NavigationActions, StackActions} from "react-navigation";

export default class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.loadingHUD = new LoadingHUD();

        GoogleSignin.configure({
            scopes: [ 'https://www.googleapis.com/auth/drive.photos.readonly'],
            iosClientId:"28737675634-qjbsv3v630qkht3873df5u8imge2m73g.apps.googleusercontent.com",
            androidClientID:"28737675634-lj98h6del42r0pkh7levu44jh15tkm5u.apps.googleusercontent.com",
            forceConsentPrompt: true // if you want to show the authorization prompt at each login
        });
    }
    async onLoginFacebook() {
        this.loadingHUD.show()
        LoginManager.logInWithPermissions(["public_profile", "email"])
            .then(result => {
                console.log("Facebook Result: --->>> ",result);
                this.loadingHUD.show();
                if (result.isCancelled) {
                    this.loadingHUD.hideAll();
                } else {
                    return AccessToken.getCurrentAccessToken();
                }
            })
            .then(data => {
                console.log("Facebook Data: --->>> ",data);
                return firebase.auth.FacebookAuthProvider.credential(data.accessToken);
            })
            .then(res => {
                console.log("Facebook Response: --->>> ",res);
                this.navigateToHome(res);
            })
            .catch(err => {
                console.log(err);
                this.loadingHUD.hideAll();
            });
    }


    onGoogleSignIn() {
        this.loadingHUD.show()
        GoogleSignin.hasPlayServices().then(res => {
            GoogleSignin.signIn().then(data => {
                GoogleSignin.getTokens().then((res) => {
                    const credential = firebase.auth.GoogleAuthProvider.credential(res.idToken, res.accessToken)
                    this.navigateToHome(credential);
                });
            }).catch(err => {
                alert(err);
                console.log(err);
                console.log(err.code);
                if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                    // user cancelled the login flow
                } else if (error.code === statusCodes.IN_PROGRESS) {
                    // operation (e.g. sign in) is in progress already
                } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                    // play services not available or outdated
                } else {
                    // some other error happened
                }
            });
        }).catch(err => {
            alert(err);
            console.log(err);
        });
    }


    navigateToHome(credential) {
        firebase.auth().signInWithCredential(credential)
            .then(currentUser => {
                console.log("Current User ====>>> ", currentUser);
                AsyncStorage.setItem(CURRENT_USER, JSON.stringify(currentUser));
                const user = currentUser.user._user;
                this.setProfile(user);
            })
            .catch(error =>{
                this.loadingHUD.hideAll();
                alert(error);
                console.log("Error ====>>> ", error);
            });
    }

    setProfile = (user) => {
        firebase.messaging().getToken().then(async fcmToken => {
        await apiService.setUpUserProfile(user.email,user.displayName,user, fcmToken);
        });
        this.loadingHUD.hideAll();
        const navigateAction = StackActions.reset({
            index: 0,
            routeName: 'HomeStack',
            actions: [NavigationActions.navigate({routeName: 'HomeStack'})]
        });
        this.props.navigation.dispatch(navigateAction);
    };
    render() {

        return (
            <View style={styles.backgroundImage}>

                <Text style={{color:colors.white, fontSize: wp('4.5%'), fontWeight:'bold', alignSelf:'center', marginTop: hp('10%')}}>
                    Sign Up With
                </Text>


                <TouchableOpacity onPress={this.onLoginFacebook.bind(this)}>
                    <Image style={{width: '80%', height:hp('7.6%'), alignSelf:'center', marginTop:hp('3%')}}
                           source={images.fb}
                           resizeMode='contain'
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onGoogleSignIn.bind(this)}>
                    <Image style={{width: '80%', height:hp('7.6%'), alignSelf:'center', marginTop:hp('3%')}}
                           source={images.g_plus}
                           resizeMode='contain'
                    />
                </TouchableOpacity>


                <Text style={{color:colors.black, fontSize: wp('4.5%'), fontWeight:'bold', alignSelf:'center', marginTop: hp('8%')}}>
                    OR
                </Text>


                <TouchableOpacity style = {{width: wp('70%'), height: hp('7%'), backgroundColor: colors.orange,
                    marginTop:hp('5%'),alignSelf:'center',justifyContent:'center',alignItems:'center', borderRadius:5}}

                                  onPress={()=>this.props.navigation.navigate('SignUp')}
                >
                    <Text style={{color:colors.white,fontSize:wp('5%')}}>Sign UP With Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {{flex:1, width: wp('70%'), height: hp('38%'),
                    alignSelf:'center',alignItems:'center', justifyContent:'flex-end', marginBottom:hp('1%'),borderRadius:5}}
                                  onPress={()=>this.props.navigation.navigate('Login1')}
                >
                    <Text style={{color:colors.black,fontSize:wp('4%'), marginTop:hp('0%')}}>Already have account?</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    containerOne: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10
    },
    containerTwo: {
        alignItems: 'center',
        paddingRight: 10,
        paddingLeft: 10
    }
});
