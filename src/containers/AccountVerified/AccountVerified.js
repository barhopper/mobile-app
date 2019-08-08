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

class AccountVerified extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '',
            email: '',
            password: '',
        };
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
                                Email Confirmed
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
                            <View style={{marginTop:20,alignSelf:'center'}}>
                                <Text style={{color:'#fff'}}>Your account is now verified.</Text>
                                <Text style={{color:'#fff'}}>Please proceed to Login.</Text>
                            </View>

                        <View style={{
                                 alignSelf: 'center',
                                 position:'absolute',
                                 bottom:60
                        }}>
                            <TouchableOpacity
                                  onPress={() => Actions.Login()}
                                style={styles.next}>
                                <Text style={{ color: '#fff', fontSize: 14,}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}


export default AccountVerified;
