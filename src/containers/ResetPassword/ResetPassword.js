import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView,Platform
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '',
            email: '',
            password: '',
            dialogclose: false,
        };
    }
    dialogopen() {
        this.setState({ dialogclose: true })

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
                                Reset Password
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
                        <View style={{width:width/2 + 70,alignSelf:'center',marginTop:20}}>
                            <Text style={{color:'#fff',fontSize:RF(2),textAlign:'center',fontWeight:'bold'}}>Input the email used to create your account. We will send you a link to reset your password.</Text>
                        </View>
                        
                        <View style={{ marginTop: 10, alignSelf: 'center' }}>
                            <TouchableOpacity
                                 onPress={() => this.dialogopen()}
                                style={styles.next}>
                                <Text style={{ color: '#fff', fontSize: 14,}}>Reset Password</Text>
                            </TouchableOpacity>
                        </View>
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
                        width: width/2+50,
                        height: 150,
                        paddingTop: 10
                    }}>
                        <View>
                            <View style={{ marginTop: 5, alignSelf: 'center' }}>
                                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 16 }}>Email Sent</Text>
                            </View>
                            <View style={{ marginTop: 10,width:width/2 + 20,}}>
                                <Text style={{ textAlign: 'center',color:'#000' }}>We have sent a reset password link to your email.</Text>
                            </View>
                            <View style={{ height: 1, width: width - 30, backgroundColor: 'grey', alignSelf: 'center',marginTop:20 }}></View>
                            <View style={{ marginTop: 10 }}>
                                <TouchableOpacity
                                   onPress={() => { this.setState({ dialogclose: false }); }}
                                >
                                    <View style={{alignSelf:'center'}}>
                                        <Text style={{fontSize: 15,color:'#c42d3e', fontWeight: 'bold'}}>Okay</Text>
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


export default ResetPassword;
