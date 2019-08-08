import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
     ScrollView, CheckBox
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class SignupType extends React.Component {

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
                        <View style={styles.view2}>
                            <TouchableOpacity
                                onPress={() => Actions.SignupCustomer()}
                            >
                                <Image source={require('./../../components/Images/customer.png')}
                                    style={styles.image1}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 20
                        }}>
                            <View style={styles.view3}></View>
                        </View>
                        <View style={styles.view4}>
                            <TouchableOpacity
                                // onPress={() => Actions.SignupCustomer()}
                            >
                                <Image source={require('./../../components/Images/barowner.png')}
                                    style={styles.image1}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}


export default SignupType;
