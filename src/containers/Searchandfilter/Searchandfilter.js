import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, FlatList,
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Slider from "react-native-slider";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class Searchandfilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "20",
            Entertainment: '',
            atmosphere: '',
            sports: '',
            music: '',
            closestbar: '',
            choice: '',
            value: 0.2,
            chngcolor:'',
            cngeTxtColor:''

        };
    }
    hideShow(chngcolor){
        const color = chngcolor;

      switch(color) {
         case 'Entertainment' :
            this.setState({
                chngcolor:"Entertainment",
               // cngeTxtColor:
            }) 
            break;
         case 'Atmosphere' :
                this.setState({
                    chngcolor:"Atmosphere"
                }) 
                break; 
         case 'Sports' :
            this.setState({
                chngcolor:"Sports"
            }) 
            break;
         case 'Music' :
                this.setState({
                    chngcolor:"Music"
                }) 
                break;
         case 'Closesr_Bar' :
                this.setState({
                    chngcolor:"Closesr_Bar",

                }) 
            break;
            case 'BarhopperChoice' :
                    this.setState({
                        chngcolor:"BarhopperChoice"
                    }) 
                break;
         default :
         this.setState({
            chngcolor:""
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
                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        padding: 15,
                    }}>
                        <Text style={{ fontWeight: 'bold' }}>Search Distance</Text>
                        <Text style={{ fontWeight: '400', fontSize: RF(2) }}>{this.state.value} miles</Text>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Slider
                            //value={this.state.value}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#a13745"
                            thumbTintColor="#a13745"
                            onValueChange={(value) => this.setState({ value })} />
                        {/* <Text>Value: {this.state.value}</Text> */}
                    </View>
                    {/* <View style={styles.container1}>
                            <Slider
                                style={{}}
                                // step={1}
                                maximumValue={100}
                                // onValueChange={this.change.bind(this)}
                                minimumTrackTintColor="#a13745"
                                maximumTrackTintColor="#1a1a1a"
                                thumbTintColor="#a13745"
                                value={20}
                            />
                        </View>  */}
                    <View>
                        <Text style={{ marginLeft: 12, fontWeight: 'bold', marginTop: 10 }}>Categories</Text>
                    </View>
                    <View style={styles.view1}>
                        <TouchableOpacity 
                        onPress = {() => this.hideShow("Entertainment")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('25%'),
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3,
                                    backgroundColor: this.state.chngcolor == "Entertainment" ? '#c42d3e' : "#fff"
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "Entertainment" ? "#fff" : "#000" }}>Entertainment</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {() => this.hideShow("Atmosphere")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('25%'),
                                    backgroundColor: this.state.chngcolor == "Atmosphere" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "Atmosphere" ? "#fff" : "#000" }}>Atmosphere</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {() => this.hideShow("Sports")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('18%'),
                                    backgroundColor: this.state.chngcolor == "Sports" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "Sports" ? "#fff" : "#000" }}>Sports</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress = {() => this.hideShow("Music")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('20%'),
                                    backgroundColor: this.state.chngcolor == "Music" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "Music" ? "#fff" : "#000" }}>Music</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flexDirection: 'row', paddingHorizontal: 12,
                        marginTop: 10
                    }}>
                        <TouchableOpacity
                        onPress = {() => this.hideShow("Closesr_Bar")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('25%'),
                                    backgroundColor: this.state.chngcolor == "Closesr_Bar" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "Closesr_Bar" ? "#fff" : "#000" }}>Closest Bar</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress = {() => this.hideShow("BarhopperChoice")}
                        >
                            <View
                                style={{
                                    height: hp('5%'),
                                    width: wp('30%'),
                                    backgroundColor: this.state.chngcolor == "BarhopperChoice" ? '#c42d3e' : "#fff",
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 3,
                                    marginLeft: 10
                                }}>
                                <Text style={{ fontSize: RF(1.6), color: this.state.chngcolor == "BarhopperChoice" ? "#fff" : "#000" }}>Barhopper's Choice</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={() => Actions.Subcategory()}
                            style={{
                                height: (width * 0.12),
                                width: width - 150,
                                backgroundColor: '#c42d3e',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 3
                            }}>
                            <Text style={{ color: '#fff' }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}

export default Searchandfilter;
