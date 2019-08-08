import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, CheckBox
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import { heightPercentageToDP } from "react-native-responsive-screen";
import RF from "react-native-responsive-fontsize"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Landingpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, }}>
                    <ImageBackground source={require('./../../components/Images/background.jpg')}
                        style={{ height: "100%", width: "100%", }}>
                        <View style={styles.view1}>
                            <Text style={styles.text1}>Sign Up</Text>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 20
                        }}>
                            <Image source={require("../../components/Images/logo2.png")}
                                style={styles.image2}>
                            </Image>
                        </View>

                        <TouchableOpacity>
                            <View style={{
                                height: hp('7%'),
                                width: wp('60%'),
                                backgroundColor: '#4165b1',
                                alignSelf: 'center',
                                borderRadius: 3,
                                marginTop: hp('8%'),
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10
                            }}>
                                <View style={{ alignSelf: 'center', }}>
                                    <Image resizeMode="contain" style={{ height: hp('5%'), width: wp('5%'), tintColor: '#fff' }}
                                        source={require('../../components/Images/facebooklogo.png')} />
                                </View>
                                <View style={{ alignSelf: 'center', }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Facebook</Text>
                                </View>
                                <View style={{
                                    width: 20
                                }} />
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{
                                height: hp('7%'),
                                width: wp('60%'),
                                backgroundColor: '#fd3a40',
                                alignSelf: 'center',
                                borderRadius: 3,
                                marginTop: hp('2.5%'),
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10
                            }}>
                                <View style={{ alignSelf: 'center', }}>
                                    <Image resizeMode="contain" style={{ height: hp('2.8%'), width: wp('6%'), tintColor: '#fff' }}
                                        source={require('../../components/Images/googlelogo.png')} />
                                </View>
                                <View style={{ alignSelf: 'center', }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Google</Text>
                                </View>
                                <View style={{
                                    width: 20
                                }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=> Actions.SignupCustomer()}
                        >
                            <View style={{
                                height: hp('7%'),
                                width: wp('60%'),
                                backgroundColor: '#f89520',
                                alignSelf: 'center',
                                borderRadius: 3,
                                marginTop: hp('2.5%'),
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10
                            }}>
                                <View style={{ alignSelf: 'center', }}>
                                    <Image resizeMode="contain" style={{ height: hp('3%'), width: wp('6%'), tintColor: '#fff' }}
                                        source={require('../../components/Images/emaillogo.png')} />
                                </View>
                                <View style={{ alignSelf: 'center', }}>
                                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Email</Text>
                                </View>
                                <View style={{
                                    width: 20
                                }} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=> Actions.Login()}
                        style={{position:'absolute',bottom:40,alignSelf:'center'}}>
                        <View>
                            <Text style={{color:'#fff',textDecorationLine:'underline'}}>Already have an account?</Text>
                        </View>
                        </TouchableOpacity>

                    </ImageBackground>
                </View>
            </View>
        );
    }
}


export default Landingpage;
