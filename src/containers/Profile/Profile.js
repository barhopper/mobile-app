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
var ImagePicker = require('react-native-image-picker');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const items = [
    {
        img1: require("../../components/Images/image8.png"),
        name: "O'KEEFE'S BAR & GRILL",
        distance: "0.3 mi",
        line1: "Lovely sports bar doling out pub grub & plenty of booze in TV-equipped surroundings.",
        // line2: "plenty of booze in TV-equipped",
        // line3: "surroundings."
    },
    {
        img1: require("../../components/Images/image-9.png"),
        name: "200 FIFTH",
        distance: "2.2 mi",
        line1: "Longtime Park Slope sports bar that draws a crowd with beer & televised sports.",
        // line2: "a crowd with beer & televised sports.",
    },
    {
        img1: require("../../components/Images/3.png"),
        name: "TEDDY'S BAR & GRILL",
        distance: "4.3 mi",
        line1: "Old New York lives on at this 18880s-era bar eatery with stained-glass windows..",
        // line2: "bar eatery with stained-glass windows..",
    },
    {
        img1: require("../../components/Images/4.png"),
        name: "MONTERO",
        distance: "6.7 mi",
        line1: "Longyime watering hole with a weatered bar & pool table in a nautical-themed set...",
        // line2: "bar & pool table in a nautical-themed set...",
    },

];
const items1 = [
    {
        img1: require("../../components/Images/image8.png"),
        line1: "O'Keefe's Bar & Grill",
        line2: "Unfollow",

    },
    {
        img1: require("../../components/Images/image8.png"),
        line1: "KFK Bar",
        line2: "Unfollow",

    },
];

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            oldpassword: '',
            newpassword: '',
            cnfpassword: '',
            filePath: {},
        };

    }


    chooseFile = () => {
        var options = {
            title: 'Select Image',
            // customButtons: [
            //   { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            // ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response;
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    filePath: source,
                });
            }
        });
    };
    render() {

        return (
            <View style={{ flex: 1 }}>

                <AppHeader
                    headerTitle={'Search'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                // userprofile={require("../../components/Images/settings2.png")}
                // userimg={require("../../components/Images/notification.png")}
                // profile={() => Actions.Settings()}
                />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={this.chooseFile.bind(this)}>
                            <View style={{
                                marginTop: 20,
                                marginBottom: 10, alignSelf: 'center'
                            }}>
                                <Image source={this.state.filePath.data !== undefined ? {
                                    uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
                                } : require("../../components/Images/men.png")}
                                resizeMode="contain"

                                    style={{
                                        height: hp('20%'),
                                        width: wp('35%'), borderRadius: 80,
                                    }} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ alignSelf: 'center' }}>
                            <Text style={{ color: '#c42d3e' }}>johndoe@email.com</Text>
                        </View>

                        <View>
                            <Text style={{ color: '#786a7c', marginLeft: 12, marginTop: 10, fontWeight: 'bold', fontSize: 16 }}>Change Password</Text>
                        </View>
                        <View style={styles.view1}>
                            <TextInput style={styles.text1}
                                underlineColorAndroid="transparent"
                                placeholder="Old Password"
                                placeholderTextColor="#b7b7b7"
                                autoCapitalize="none"
                                value={this.state.oldpassword}
                                onChangeText={(text) => this.setState({ oldpassword: text })} />
                        </View>
                        <View style={styles.view1}>
                            <TextInput style={styles.text1}
                                underlineColorAndroid="transparent"
                                placeholder="New Password"
                                placeholderTextColor="#b7b7b7"
                                autoCapitalize="none"
                                value={this.state.newpassword}
                                onChangeText={(text) => this.setState({ newpassword: text })} />
                        </View>
                        <View style={styles.view1}>
                            <TextInput style={styles.text1}
                                underlineColorAndroid="transparent"
                                placeholder="Confirm New Password"
                                placeholderTextColor="#b7b7b7"
                                autoCapitalize="none"
                                value={this.state.cnfpassword}
                                onChangeText={(text) => this.setState({ cnfpassword: text })} />
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: '#786a7c', marginLeft: 13, marginTop: 10, fontWeight: 'bold', }}>Following</Text>
                    </View>



                    <View style={{ flex: 1 }}>
                        <View>
                            <FlatList
                                data={items1}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) =>

                                    <View style={[styles.view1, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }]}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{}}>
                                                <Image source={item.img1}
                                                    style={{
                                                        height: hp('7%'), width: wp('13%'),
                                                    }}>
                                                </Image>
                                            </View>
                                            <View style={{ marginLeft: 13, }}>

                                                <Text style={styles.text1}>{item.line1}</Text>
                                            </View>


                                        </View>
                                        <View style={{}}>

                                            <TouchableOpacity style={styles.touchable1}>
                                                <Text style={{
                                                    color: '#fff',
                                                    fontSize: RF(1.8),
                                                    textAlign: 'center'
                                                }}>
                                                    {item.line2}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                }
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default Profile;
