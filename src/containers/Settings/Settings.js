import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
     ScrollView, FlatList
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Settings extends React.Component {
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

                <AppHeader
                    headerTitle={'Settings'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                // userprofile={require("../../components/Images/settings2.png")}
                // userimg={require("../../components/Images/notification.png")}
                // profile={() => Actions.Settings()}
                />
                <ScrollView>

                    <View style={{}}>
                        <TouchableOpacity
                        onPress={() => Actions.Profile()}>
                            <View style={styles.view1}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image source={require("../../components/Images/profile2.png")}
                                        style={styles.image1}>
                                    </Image>
                                    <Text style={styles.text1}>Barhopper's Profile</Text>
                                </View>
                                <View>
                                    <Image source={require("../../components/Images/rightarrowgrey.png")}
                                        style={styles.arrow}>
                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress={() => Actions.Livefeed()}
                        >
                            <View style={styles.view2}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image source={require("../../components/Images/livefeed2.png")}
                                        style={styles.image1}>
                                    </Image>
                                    <Text style={styles.text1}>Live Feed</Text>
                                </View>
                                <View>
                                    <Image source={require("../../components/Images/rightarrowgrey.png")}
                                        style={styles.arrow}>
                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.Aboutapp()}
                        >
                            <View style={styles.view2}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image source={require("../../components/Images/about.png")}
                                        style={styles.image1}>
                                    </Image>
                                    <Text style={styles.text1}>About the App</Text>
                                </View>
                                <View>
                                    <Image source={require("../../components/Images/rightarrowgrey.png")}
                                        style={styles.arrow}>
                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.RateApp()}>
                            <View style={styles.view2}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image source={require("../../components/Images/starred.png")}
                                        style={styles.image1}>
                                    </Image>
                                    <Text style={styles.text1}>Rate App</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.Repot_a_Problem()}>
                            <View style={styles.view2}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image source={require("../../components/Images/report.png")}
                                        style={styles.image1}>
                                    </Image>
                                    <Text style={styles.text1}>Report a Problem</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.Termsandconditions()}
                        >
                            <View style={styles.view2}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image source={require("../../components/Images/tandc.png")}
                                        style={styles.image1}>
                                    </Image>
                                    <Text style={styles.text1}>Terms and Conditions</Text>
                                </View>
                                <View>
                                    <Image source={require("../../components/Images/rightarrowgrey.png")}
                                        style={styles.arrow}>
                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.Privacypolicy()}
                        >
                            <View style={styles.view2}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image source={require("../../components/Images/privacypolicy.png")}
                                        style={{ height: 22, width: 18, }}>
                                    </Image>
                                    <Text style={styles.text1}>Privacy Policy</Text>
                                </View>
                                <View>
                                    <Image source={require("../../components/Images/rightarrowgrey.png")}
                                        style={styles.arrow}>
                                    </Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.view3}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <Image source={require("../../components/Images/log-out.png")}
                                        style={{ height: 18, width: 18, }}>
                                    </Image>
                                    <Text style={styles.text2}>Log Out</Text>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default Settings;
