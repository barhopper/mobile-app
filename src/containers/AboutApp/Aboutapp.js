import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
     ScrollView, FlatList
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';
import RF from "react-native-responsive-fontsize"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



class Aboutapp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <ImageBackground source={require('./../../components/Images/app.jpg')}
                        style={{ height: 250, width: "100%", }}>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                                <Image source={require("../../components/Images/left.png")}
                                    style={styles.image1}>
                                </Image>
                            </TouchableOpacity>
                            <Text style={styles.text1}>
                                About the App
                              </Text>
                        </View>
                        <View style={styles.View1}>
                            <Image source={require("../../components/Images/logo2.png")}
                                style={styles.image2}>
                            </Image>
                        </View>
                        <View style={styles.View1}>
                            <Text style={styles.text2}>Version 1.00</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.View2}>
                        <Text style={styles.text3}>
                            Far far away behind the world mountains and far from the countries
                            Vokalia and Consonantia,there live the blind texts,Separated they
                            live in Bookmarksgroove right at the coast of the Semantics,
                            a large Language Ocean
                        </Text>
                    </View>
                    <View style={styles.View3}>
                        <Text style={styles.text3}>
                            Far far away behind the world mountains and far from the countries
                            Vokalia and Consonantia,there live the blind texts,Separated they
                            live in Bookmarksgroove right at the coast of the Semantics,
                            a large Language Ocean
                        </Text>
                    </View>
                    <View style={styles.View3}>
                        <Text style={styles.text3}>
                            Far far away behind the world mountains and far from the countries
                            Vokalia and Consonantia,there live the blind texts,Separated they
                            live in Bookmarksgroove right at the coast of the Semantics,
                            a large Language Ocean
                        </Text>
                    </View>
                </View>
            </View>

        );
    }
}


export default Aboutapp;
