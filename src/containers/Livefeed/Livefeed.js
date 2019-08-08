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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const items = [
    {
        img1: require("../../components/Images/image8.png"),
        name: "O'KEEFE'S BAR & GRILL - 1ST ANNIVERSARY",
        time:"Tonight at 9PM",
        line1: "A party like no other! All drinks are unlimited for only $25/person.Bring your friends and get to avail the 10+1 promo! See you!",
        // line2: "unlimited for only $25/person.",
        // line3: "Bring your friends and get to avail",
        // line4: "the 10+1 promo! See you!",
    },
    {
        img1: require("../../components/Images/image-9.png"),
        name: "SINGLES LADIES NIGHT",
        time:"Expires in 2 days",
        line1: "Merriman's on Buy 1 Take 1 on all drinks from March 1st to 5th! Hurry! Rush in and call your friensds.",
        // line2: "drinks from March 1st to 5th! Hurry!",
        // line3: "Rush in and call your friensds.",
    },
];

class Livefeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: ''
        };
    }

    render() {
        return (
            <View>
                <AppHeader
                    headerTitle={'Livefeed'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                    // userprofile={require("../../components/Images/settings2.png")}
                    // userimg={require("../../components/Images/notification.png")}
                // profile={() => Actions.Settings()}
                />
                <ScrollView>
                    <View style={{}}>
                        <View style={styles.view1}>
                            <View style={styles.view2}>
                                <View >
                                    <Image source={require("../../components/Images/search.png")}
                                        style={{ height: 15, width: 15 }}>
                                    </Image>
                                </View>
                                <View style={{ marginHorizontal: 15 }}>
                                    <TextInput style={styles.textinput1}
                                        underlineColorAndroid="transparent"
                                        placeholder="Search"
                                        placeholderTextColor="#999999"
                                        autoCapitalize="none"
                                        value={this.state.password}
                                        onChangeText={(text) => this.setState({ password: text })} />
                                </View>
                            </View>
                        </View>
                        <View>
                            <FlatList
                                data={items}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>
                                    <TouchableOpacity>
                                        <View style={{
                                            alignItems: 'center',
                                        }}>




                                            <View style={styles.view4}>
                                                <View style={{}}>
                                                    <Text style={{fontWeight:'bold',fontSize:RF(2.2),color:'#000'}}>{item.name}</Text>
                                                    <Text style={{fontSize:RF(2),fontStyle:'italic',marginTop:3,color:'#787878'}}>{item.time}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <View>
                                                    <Image source={item.img1}
                                                        style={{
                                                            height: hp('22%'), width: wp('35%'),
                                                          marginTop:6
                                                        }}>
                                                    </Image>
                                                    </View>
                                                    <View>
                                                    <View style={{
                                                        height: 1.2, width: 15,
                                                        backgroundColor: '#c42d3e',
                                                        marginLeft: 15, marginTop: 5
                                                    }} />
                                                    <View style={{marginLeft:10,marginTop:5,width:width/2 + 10,}}>
                                                        <Text style={styles.text1}>{item.line1}</Text>
                                                    </View>


                                                    <View style={{marginLeft:15,marginRight:10,marginTop:10}}>
                                                        <TouchableOpacity 
                                                        onPress={() => Actions.Promodetails()}
                                                        style={styles.touchable1}>
                                                            <Text style={{color:'#fff',fontWeight:'bold'}}>View Promotion</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                    </View>
                                                </View>
                                            </View>




                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                        <View style={{ height: 60 }} />
                    </View>
                </ScrollView>
            </View>

        );
    }
}


export default Livefeed;
