import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, Platform
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import RF from "react-native-responsive-fontsize";
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class SignupCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '',
            email: '',
            password: '',
            secureKey: true,
            dialogclose: false,
        };
    }
    dialogopen() {
        this.setState({ dialogclose: true })
    }
    agreeBtn() {
        this.setState({ dialogclose: false })
        Actions.ConfirmedEmail()
    }
    termsBtn() {
        this.setState({ dialogclose: false })
        Actions.Termsandconditions()
    }
    privacyBtn(){
        this.setState({ dialogclose: false })
        Actions.Privacypolicy()
    }

    secureKey() {
        if (this.state.secureKey == false) {
            this.setState({
                secureKey: true
            })
        }
        else {
            this.setState({
                secureKey: false
            })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ flex: 1, }}>
                    <ImageBackground source={require('./../../components/Images/background.jpg')}
                        style={{ height: "100%", width: "100%", }}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                                <Image source={require("../../components/Images/left.png")}
                                    style={styles.image1}>
                                </Image>
                            </TouchableOpacity>
                            <Text style={styles.text1}>
                                Sign Up
                              </Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            <Image source={require("../../components/Images/logo2.png")}
                                style={{
                                    height: (width * 0.40),
                                    width: width / 2,
                                    marginTop: 8
                                }}>
                            </Image>
                        </View>
                        <View style={styles.view3}>
                            <View style={{ width: wp('2%'), alignSelf: 'center' }}>
                                <Image resizeMode="contain" style={{ height: hp('3%'), width: wp('5%'), tintColor: 'grey' }}
                                    source={require('../../components/Images/emaillogo.png')} />
                            </View>
                            <View style={{ alignSelf: 'center',width: wp('62%'), marginLeft: 5 }}>
                                <TextInput style={styles.textinput1}
                                    underlineColorAndroid="transparent"
                                    placeholder="Enter your email"
                                    placeholderTextColor="#999999"
                                    autoCapitalize="none"
                                    value={this.state.email}
                                    onChangeText={(text) => this.setState({ email: text })} />
                            </View>
                        </View>
                        <View style={styles.view4}>
                            <Image source={require("../../components/Images/tick.png")}
                                style={styles.image3}>
                            </Image>
                            <Text style={styles.text2}>Valid email.</Text>
                        </View>
                        <View style={styles.view6}>
                            <Image source={require("../../components/Images/tick.png")}
                                style={styles.image3}>
                            </Image>
                            <Text style={styles.text2}>Invalid email.</Text>
                        </View>
                        <View style={styles.view5}>
                            <View style={{ width: wp('2%'), alignSelf: 'center' }}>
                                <Image resizeMode="contain" style={{ height: hp('3%'), width: wp('6%'), tintColor: 'grey' }}
                                    source={require('../../components/Images/privacypolicy.png')} />
                            </View>
                            <View style={{ alignSelf: 'center', width: wp('62%'), marginLeft: 5 }}>
                                <TextInput style={styles.textinput1}
                                    underlineColorAndroid="transparent"
                                    placeholder="Enter your password"
                                    placeholderTextColor="#999999"
                                    autoCapitalize="none"
                                    // secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText={(text) => this.setState({ password: text })} />
                            </View>
                            {/* <View style={{alignSelf:'center',width:wp('7%')}}>
                                    <TouchableOpacity 
                                    onPress ={()=> this.secureKey()}
                                    >
                                <Image source={require("../../components/Images/eye.png")}
                                style={{width:18,height:15,tintColor:this.state.secureKey == true ? "#000" : "#c42d3e" }}>
                            </Image>
                            </TouchableOpacity>
                                </View> */}
                        </View>
                        <View style={styles.view4}>
                            <Image source={require("../../components/Images/tick.png")}
                                style={styles.image3}>
                            </Image>
                            <Text style={styles.text2}>At least 6 characters long.</Text>
                        </View>
                        <View style={styles.view6}>
                            <Image source={require("../../components/Images/tick.png")}
                                style={styles.image3}>
                            </Image>
                            <Text style={styles.text2}>Contains a letter.</Text>
                        </View>
                        <View style={styles.view6}>
                            <Image source={require("../../components/Images/tick.png")}
                                style={styles.image3}>
                            </Image>
                            <Text style={styles.text2}>Contains a number.</Text>
                        </View>
                        <View style={styles.view6}>
                            <Image source={require("../../components/Images/tick.png")}
                                style={styles.image3}>
                            </Image>
                            <Text style={styles.text2}>Contains a special character.</Text>
                        </View>
                        {/* <View style={styles.view7}>
                            <View style={styles.view2}></View>
                        </View>
                        <View style={{ marginTop: 30, alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontSize: RF(2.2) }}>Or Sign In Through</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 25 }}>
                            <TouchableOpacity>
                            <Image source={require("../../components/Images/facebook.png")}
                                style={{ height: hp('10%'), width: wp('17%') }}>
                            </Image>
                            </TouchableOpacity>
                        </View> */}
                        <View style={{ marginTop: 10, alignSelf: 'center' }}>
                            <TouchableOpacity
                                 onPress={() => this.dialogopen()}
                                style={styles.next}>
                                <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                          onPress={() => Actions.Login()}
                        style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }}>
                            <View>
                                <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>Already have an account?</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <Dialog
                    visible={this.state.dialogclose}
                    onTouchOutside={() => {
                        this.setState({ dialogclose: true });
                    }}
                >
                    <DialogContent style={{
                        borderRadius: Platform.OS === 'android' ? null : null,
                        width: width/2+60,
                        height: 200,
                        paddingTop: 10

                    }}>
                         <View>
                            <View style={{ marginTop: 5, alignSelf: 'center' }}>
                                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text>
                            </View>
                            <View style={{ marginTop: 10,width:width/2 + 50,alignSelf:'center'}}>
                                <Text style={{ textAlign: 'center',color:'#000',fontSize:RF(2.2),fontWeight:'bold' }}>By signing up, you agree with the<Text onPress={() => this.termsBtn()}style={{color:'#c42d3e',textDecorationLine:'underline',fontSize:RF(2.2)}}>Terms and Conditions</Text> and <Text onPress={() => this.privacyBtn()} style={{color:'#c42d3e',textDecorationLine:'underline',fontSize:RF(2.2)}}>Privacy Policy.</Text></Text>
                            </View>
                            <View style={{ height: 1, width: width - 30, backgroundColor: 'grey', alignSelf: 'center',marginTop:15 }}></View>
                            <View style={{ marginTop: 10 }}>
                                <TouchableOpacity
                                   onPress={() => this.agreeBtn()}
                                >
                                    <View style={{alignSelf:'center'}}>
                                        <Text style={{fontSize: 15,color:'#c42d3e', fontWeight: 'bold'}}>Agree</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 1, width: width - 30, backgroundColor: 'grey', alignSelf: 'center',marginTop:10 }}></View>
                            <View style={{ marginTop: 10 }}>
                                <TouchableOpacity
                                   onPress={() => { this.setState({ dialogclose: false }); }}
                                >
                                    <View style={{alignSelf:'center'}}>
                                        <Text style={{fontSize: 15,color:'#000', fontWeight: 'bold'}}>Cancel</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                           
                        </View>
                    </DialogContent>
                </Dialog>

            </View>
        );
    }
}


export default SignupCustomer;
