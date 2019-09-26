import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, FlatList, Alert
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';
import RF from "react-native-responsive-fontsize";
var ImagePicker = require('react-native-image-picker');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class Repot_a_Problem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            oldpassword: '',
            newpassword: '',
            cnfpassword: '',
            filePath: {},
            modalVisible: false,
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    rateapp() {
        Alert.alert('your request is submited')
    }
    render() {

        return (
            <View style={{ flex: 1 }}>

                <AppHeader
                    headerTitle={'Report a Problem'}
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
                            <Text style={{ color: '#786a7c', marginLeft: 12, marginTop: 20, fontWeight: 'bold', fontSize: 16 }}>Comments:</Text>
                        </View>
                        <View style={styles.view1}>
                            <TextInput style={styles.text1}
                                underlineColorAndroid="transparent"
                                placeholder="Enter problem details.."
                                placeholderTextColor="#b7b7b7"
                                autoCapitalize="none"
                                multiline={true}
                                underlineColorAndroid="transparent"
                                value={this.state.oldpassword}
                                onChangeText={(text) => this.setState({ oldpassword: text })} />
                        </View>

                    </View>


                    <View>
                        <View>
                            <TouchableOpacity onPress = {()=> this.rateapp()}
                            style={styles.touchable1}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: RF(1.8),
                                    textAlign: 'center'
                                }}>
                                    Submit
                            </Text>
                            </TouchableOpacity>
                         
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default Repot_a_Problem;
