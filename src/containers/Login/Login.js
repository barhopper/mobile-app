import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView,
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import CheckBox from 'react-native-check-box'
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '',
            email: '',
            password: '',
            secureKey: true
        };
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
                                Log In
                              </Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}>
                            <Image source={require("../../components/Images/logo2.png")}
                                style={{
                                    height: (width * 0.50),
                                    width: width / 2 + 50,
                                    marginTop: 8
                                }}>
                            </Image>
                        </View>
                        <View style={styles.view3}>
                            <View style={{ width: wp('2%'), alignSelf: 'center' }}>
                                <Image resizeMode="contain" style={{ height: hp('3%'), width: wp('5%'), tintColor: 'grey' }}
                                    source={require('../../components/Images/emaillogo.png')} />
                            </View>
                            <View style={{ width: wp('62%'), marginLeft: 5 }}>
                                <TextInput style={styles.textinput1}
                                    underlineColorAndroid="transparent"
                                    placeholder="Enter your email"
                                    placeholderTextColor="#999999"
                                    autoCapitalize="none"
                                    value={this.state.email}
                                    onChangeText={(text) => this.setState({ email: text })} />
                            </View>
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
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 15, alignSelf: 'center' }}>
                            <CheckBox
                                style={{ marginTop: 2 }}
                                onClick={() => {
                                    this.setState({
                                        isChecked: !this.state.isChecked
                                    })
                                }}
                                isChecked={this.state.isChecked}
                                checkedImage={<Image style={{ height: 17, width: 17 }} source={require('../../components/Images/Unchecked.png')} />}
                                unCheckedImage={<Image style={{ height: 17, width: 17 }} source={require('../../components/Images/check.png')} />}
                            />
                            <Text style={{ color: '#fff', marginLeft: 10 }}>Remember Me</Text>
                        </View>
                        <View style={{ marginTop: 10, alignSelf: 'center' }}>
                            <TouchableOpacity
                                onPress={() => Actions.Searchandfilter()}
                                style={styles.next}>
                                <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                         onPress={() => Actions.ResetPassword()}
                        style={{ position: 'absolute', bottom: 40, alignSelf: 'center' }}>
                            <View>
                                <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>Forgot Password?</Text>
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}


export default Login;
