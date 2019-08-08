import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, FlatList
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PhotoGrid from 'react-native-photo-grid';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const items = [
    {
        img1: require("../../components/Images/image8.png"),
        img1: require("../../components/Images/image-9.png"),
        img1: require("../../components/Images/4.png"),
        img1: require("../../components/Images/3.png"),
    },

];


class Promodetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: '',

        };
    }



    render() {
        
        return (
            <View>

                <AppHeader
                    headerTitle={'Promo Details'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                // userprofile={require("../../components/Images/settings2.png")}
                // userimg={require("../../components/Images/notification.png")}
                // profile={() => Actions.Settings()}
                />
                <ScrollView>
                    <View style={{ paddingHorizontal: 10, backgroundColor: '#fff', flex: 1, height: height }}>
                        <View style={{ marginTop: 5 }}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: RF(2),
                                color: '#000'
                            }}>
                                O'KEEFE'S BAR & GRILL - 1ST ANNIVERSARY
                                </Text>
                            <Text style={{ fontSize: RF(1.8), fontStyle: 'italic', marginTop: 3 }}>
                                Tonight at 9PM
                                </Text>
                        </View>




                        <View>
                          
                            <Image source={require("../../components/Images/image-10.png")}
                                style={{
                                    height: (width * 0.34), width: width - 20,
                                    marginTop: 6
                                }}>
                            </Image>
                            
                        </View>





                        <View>
                            <Text style={{ fontSize: RF(1.8), marginTop: 10 }}>A party like no other!</Text>
                            <Text style={{ marginTop: 10, fontSize: RF(1.8) }}>All drinks are unlimited for only $25/person.Bring your friends and get
                                to avail the 10+1 promo! See you!
                            </Text>
                        </View>
                        <View style={{
                            wodth: '90%', height: 1, backgroundColor: '#a23846',
                            marginTop: 10
                        }} />
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View>
                                <Image source={require("../../components/Images/user-image.png")}
                                    style={{
                                        height: hp('8%'), width: wp('12%'),
                                        marginTop: 6, borderRadius: 3
                                    }}>
                                </Image>
                            </View>
                            <View style={{ marginTop: 8, marginLeft: 10 }}>
                                <Text style={{ fontSize: RF(1.9), fontWeight: 'bold', color: '#000' }}>Stan Williams</Text>
                                <Text style={{ fontSize: RF(1.6), color: '#c42d3e', fontStyle: 'italic', fontWeight: 'bold' }}>Organizer</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '40%' }}>
                            <TouchableOpacity style={{
                                width: width - 160,
                                height: (width * 0.11),
                                backgroundColor: '#119f29',
                                alignItems: 'center', justifyContent: 'center', borderRadius: 3
                            }}>
                                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>Get Directions</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{
                                width: width - 160,
                                height: (width * 0.11),
                                backgroundColor: '#c42d3e',
                                alignItems: 'center', justifyContent: 'center', borderRadius: 3,
                                marginTop: 10
                            }}>
                                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>Hide Promotion</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ height: 50 }} />
                    </View>
                </ScrollView>
            </View>

        );
    }
}


export default Promodetails;
