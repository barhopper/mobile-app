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
        line1: "You are near O'Keefe's Bar & Grill",
        line2: "Tap to check-in",
        img2: require("../../components/Images/flag.png"),
    },
];

class Notification extends React.Component {
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
                    headerTitle={'Notification'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                // userprofile={require("../../components/Images/settings2.png")}
                // userimg={require("../../components/Images/notification.png")}
                // profile={() => Actions.Settings()}
                />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View>
                            <FlatList
                                data={items}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        onPress={() => Actions.Checkin()}
                                    >
                                        <View style={{
                                            alignItems: 'center',
                                        }}>
                                            <View style={styles.view4}>
                                                <View style={{flexDirection:'row'}}>
                                                <View style={{ justifyContent: 'center', }}>
                                                    <Image source={item.img1}
                                                        style={{
                                                            height: hp('10%'), width: wp('16%'),
                                                        }}>
                                                    </Image>
                                                </View>
                                                <View style={{marginLeft:12,width:width/2 +40}}>
                                                    <Text style={styles.text1}>{item.line1}</Text>
                                                    <Text style={styles.text2}>{item.line2}</Text>
                                                </View>
                                                </View>

                                                <View style={{ justifyContent: 'center', }}>
                                                    <Image source={item.img2}
                                                        style={{
                                                            height: 15, width: 14,marginRight:10
                                                        }}>
                                                    </Image>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}


export default Notification;
