import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, FlatList,KeyboardAvoidingView
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/Header';
import { Card } from 'native-base';
import DropdownMenu from 'react-native-dropdown-menu';
import { Rating, AirbnbRating } from 'react-native-ratings';


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

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: '',
            text1: false,
            text2: false,
            text3: false,
            text4: false
        };
    }

    showHide() {
        if (this.state.text1 === false) {
            this.setState({
                text1: true
            })
        }
        else {
            this.setState({
                text1: false
            })
        }
    }
    showHide2() {
        if (this.state.text2 === false) {
            this.setState({
                text2: true
            })
        }
        else {
            this.setState({
                text2: false
            })
        }
    }
    showHide3() {
        if (this.state.text3 === false) {
            this.setState({
                text3: true
            })
        }
        else {
            this.setState({
                text3: false
            })
        }
    }
    showHide4() {
        if (this.state.text4 === false) {
            this.setState({
                text4: true
            })
        }
        else {
            this.setState({
                text4: false
            })
        }
    }



    render() {
        var data = [["Answer", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]];
        return (
            <KeyboardAvoidingView behavior = 'padding'enabled style={styles.container}>
            <View style={styles.container}>
                <AppHeader
                    headerTitle={'Rate Bar'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                    //userprofile={require("../../components/Images/skip.png")}
                    skip="Skip"
                    // userimg={require("../../components/Images/notification.png")}
                    profile={() => Actions.Barpage()}
                />
                <ScrollView>
                 
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <Text style={styles.text1}>It's sad to see you go but before that,</Text>
                            <Text style={styles.text1}>let us hear from you!</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.text2}>Questions: (Scale of 1-10)</Text>
                        </View>
                        <View style={{ height: 1, width: 14, backgroundColor: '#a13745', marginTop: 8 }} />
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.text3}>Are the bartenders good-looking?</Text>
                        </View>
                        <View style={styles.view5}>
                            <TouchableOpacity
                                onPress={() => this.showHide3()}
                            >
                                <View style={styles.view6}>
                                    <Text style={{ color: '#a13745' }}>10</Text>
                                    <Image resizeMode="contain" style={{
                                        width: 12,
                                        height: 15
                                    }}
                                        source={require('../../components/Images/down-arrow-2.png')} />
                                </View>
                            </TouchableOpacity>
                            {this.state.text3 === true &&
                                <View>
                                    <Text>1</Text>
                                    <Text>2</Text>
                                    <Text>3</Text>
                                    <Text>4</Text>
                                    <Text>5</Text>
                                    <Text>6</Text>
                                    <Text>7</Text>
                                    <Text>8</Text>
                                    <Text>9</Text>
                                    <Text>10</Text>
                                </View>
                            }
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.text3}>Are the bartenders friendly?</Text>
                        </View>
                        <View style={styles.view5}>
                            <TouchableOpacity
                                onPress={() => this.showHide2()}
                            >
                                <View style={styles.view6}>
                                    <Text style={{ color: '#a13745' }}>8</Text>
                                    <Image resizeMode="contain" style={{
                                        width: 12,
                                        height: 15
                                    }}
                                        source={require('../../components/Images/down-arrow-2.png')} />
                                </View>
                            </TouchableOpacity>
                            {this.state.text2 === true &&
                                <View>
                                    <Text>1</Text>
                                    <Text>2</Text>
                                    <Text>3</Text>
                                    <Text>4</Text>
                                    <Text>5</Text>
                                    <Text>6</Text>
                                    <Text>7</Text>
                                    <Text>8</Text>
                                    <Text>9</Text>
                                    <Text>10</Text>
                                </View>
                            }
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.text3}>Is the bar particularly clean, cool or cozy?</Text>
                        </View>
                        <View style={styles.view5}>
                            <TouchableOpacity
                                onPress={() => this.showHide()}
                            >
                                <View style={styles.view6}>
                                    <Text style={{ color: '#a13745' }}>7</Text>
                                    <Image resizeMode="contain" style={{
                                        width: 12,
                                        height: 15
                                    }}
                                        source={require('../../components/Images/down-arrow-2.png')} />
                                </View>
                            </TouchableOpacity>
                            {this.state.text1 === true &&
                                <View>
                                    <Text>1</Text>
                                    <Text>2</Text>
                                    <Text>3</Text>
                                    <Text>4</Text>
                                    <Text>5</Text>
                                    <Text>6</Text>
                                    <Text>7</Text>
                                    <Text>8</Text>
                                    <Text>9</Text>
                                    <Text>10</Text>
                                </View>
                            }
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.text3}>Are the products and services affordable?</Text>
                        </View>
                        <View style={styles.view5}>
                            <TouchableOpacity
                                onPress={() => this.showHide4()}
                            >
                                <View style={styles.view6}>
                                    <Text style={{ color: '#a13745' }}>8</Text>
                                    <Image resizeMode="contain" style={{
                                        width: 12,
                                        height: 15
                                    }}
                                        source={require('../../components/Images/down-arrow-2.png')} />
                                </View>
                            </TouchableOpacity>
                            {this.state.text4 === true &&
                                <View>
                                    <Text>1</Text>
                                    <Text>2</Text>
                                    <Text>3</Text>
                                    <Text>4</Text>
                                    <Text>5</Text>
                                    <Text>6</Text>
                                    <Text>7</Text>
                                    <Text>8</Text>
                                    <Text>9</Text>
                                    <Text>10</Text>
                                </View>
                            }
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.text3}>Comments</Text>
                        </View>
                        <View style={styles.view7}>
                            <View style={{ marginHorizontal: 15 }}>
                                <TextInput style={styles.textinput1}
                                    underlineColorAndroid="transparent"
                                    multiline={true}
                                    placeholder="Enter comment..."
                                    placeholderTextColor="#999999"
                                    autoCapitalize="none"
                                    value={this.state.password}
                                    onChangeText={(text) => this.setState({ password: text })} />
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.text3}>Overall Experience</Text>
                        </View>
                        <View style={{ marginTop: 15, alignItems: 'center',}}>
                            <Rating
                                onFinishRating={this.ratingCompleted}
                                startingValue={0}
                                style={{ paddingVertical: 10 }}
                            />

                            {/* <Image resizeMode="contain" style={{
                                width: 200,
                                height: 40
                            }}
                                source={require('../../components/Images/stars-grey.png')} /> */}
                        </View>
                        <View style={styles.view4}>
                            <TouchableOpacity
                                onPress={() => Actions.Barpage()}
                                style={styles.touchable1}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 20 }} />
                    </View>
                   
                </ScrollView>
            </View>
            </KeyboardAvoidingView>
        );
    }
}


export default Feedback;
