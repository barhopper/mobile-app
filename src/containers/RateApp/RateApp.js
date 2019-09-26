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

class RateApp extends React.Component {

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
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    rateapp() {
        Alert.alert('thanks for rating')
    }
    render() {

        return (
            <View style={{ flex: 1 }}>

                <AppHeader
                    headerTitle={'Rate App'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                // userprofile={require("../../components/Images/settings2.png")}
                // userimg={require("../../components/Images/notification.png")}
                // profile={() => Actions.Settings()}
                />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginTop: 20, width: width /2.2, alignSelf:'center' }}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                starSize={35}
                                interitemSpacing={3}
                                fullStarColor={'#fba721'}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />
                        </View>

                        <View>
                            <Text style={{ color: '#786a7c', marginLeft: 12, marginTop: 20, fontWeight: 'bold', fontSize: 16 }}>Comments:</Text>
                        </View>
                        <View style={styles.view1}>
                            <TextInput style={styles.text1}
                                underlineColorAndroid="transparent"
                                placeholder="Enter comment.."
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
                            <TouchableOpacity onPress ={()=>this.rateapp()}
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


export default RateApp;
