import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, FlatList, Slider
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Searchandfilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "20",
            pool: '',
            games: '',
            dart: '',
            shuffle: '',
            billiards: '',
            chngcolor: ''
        };
    }

    hideShow(chngcolor) {
        const color = chngcolor;

        switch (color) {
            case 'Pool':
                this.setState({
                    chngcolor: "Pool"
                })
                break;
            case 'VideoGames':
                this.setState({
                    chngcolor: "VideoGames"
                })
                break;
            case 'Dart':
                this.setState({
                    chngcolor: "Dart"
                })
                break;
            case 'ShuffleBoards':
                this.setState({
                    chngcolor: "ShuffleBoards"
                })
                break;
            case 'Billiards':
                this.setState({
                    chngcolor: "Billiards"
                })
                break;
            default:
                this.setState({
                    chngcolor: ""
                })
        }
    }


    render() {
        const { value } = this.state;
        return (
            <View style={styles.container}>

                <AppHeader
                    headerTitle={'Search'}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                // userprofile={require("../../components/Images/settings2.png")}
                // userimg={require("../../components/Images/notification.png")}
                // profile={() => Actions.Settings()}
                />

                <View style={{ flex: 1 }}>
                    <View style={{ paddingHorizontal: 12, marginTop: 20 }}>
                        <Text style={{ fontWeight: 'bold' }}>Sub-categories for SPORTS</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12,
                        marginTop: 20
                    }}>
                        <TouchableOpacity
                            onPress={() => this.hideShow("Pool")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('16%'),
                                    backgroundColor: this.state.chngcolor == "Pool" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "Pool" ? "#fff" : "#000" }}>Pool</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideShow("VideoGames")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('25%'),
                                    backgroundColor: this.state.chngcolor == "VideoGames" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "VideoGames" ? "#fff" : "#000" }}>Video Games</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideShow("Dart")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('15%'),
                                    backgroundColor: this.state.chngcolor == "Dart" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "Dart" ? "#fff" : "#000" }}>Dart</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.hideShow("ShuffleBoards")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('28%'),
                                    backgroundColor: this.state.chngcolor == "ShuffleBoards" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "ShuffleBoards" ? "#fff" : "#000" }}>Shuffle Boards</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 12,
                        marginTop: 10
                    }}>
                        <TouchableOpacity
                            onPress={() => this.hideShow("Billiards")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('25%'),
                                    backgroundColor: this.state.chngcolor == "Billiards" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "Billiards" ? "#fff" : "#000" }}>Billiards</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: "absolute", bottom: 20, alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={() => Actions.Homepage()}
                            style={{
                                height: (width * 0.12),
                                width: width - 150,
                                backgroundColor: '#c42d3e',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 3
                            }}>
                            <Text style={{ color: '#fff' }}>Search</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        );
    }
}

export default Searchandfilter;
