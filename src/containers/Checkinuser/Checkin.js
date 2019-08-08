import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
     ScrollView, FlatList, Platform
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import RF from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwiperFlatList from 'react-native-swiper-flatlist';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var radio_props = [
    { label: 'Male', value: 0 },
    { label: 'Female', value: 1 },

];
var radio_props2 = [
    { label: 'Single', value: 0 },
    { label: 'Not Single', value: 1 },

];

class Checkin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: ''
        };
    }

    dialogopen() {
        this.setState({ dialogclose: true })

    }
    render() {
        return (
            <View style={styles.container}>

                <AppHeader
                    headerTitle={"O'Keefe's Bar & Grill"}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}

                />
                <ScrollView>
                    <View style={{}}>
                    <View style={{
                            flex: 1,
                            backgroundColor: 'white'
                        }}>
                            <SwiperFlatList
                                autoplay
                                autoplayDelay={2}
                                autoplayLoop
                                index={2}
                                showPagination
                                paginationStyleItem={{height:8,width:8}}
                                paginationActiveColor="#c42d3e"
                                paginationStyle={{height:15,width:width-20,marginLeft:30}}
                            >
                                <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                                <ImageBackground source={require('./../../components/Images/image-2.png')}
                            style={styles.child}>
                                <View style={{position:'absolute',bottom:10,left:10}}>
                                <Text style={{color:'#fff',fontSize:RF(2.4),fontWeight:'bold'}}>O'Keefe's Bar & Grill</Text>
                                </View>
                        </ImageBackground>
                                </View>
                                <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                                <ImageBackground source={require('./../../components/Images/image-2.png')}
                            style={styles.child}>
                                <View style={{position:'absolute',bottom:10,left:10}}>
                                <Text style={{color:'#fff',fontSize:RF(2.4),fontWeight:'bold'}}>O'Keefe's Bar & Grill</Text>
                                </View>
                        </ImageBackground>
                                </View>
                                <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                                <ImageBackground source={require('./../../components/Images/image-2.png')}
                            style={styles.child}>
                                <View style={{position:'absolute',bottom:10,left:10}}>
                                <Text style={{color:'#fff',fontSize:RF(2.4),fontWeight:'bold'}}>O'Keefe's Bar & Grill</Text>
                                </View>
                        </ImageBackground>
                                </View>
                                <View style={[styles.child, { backgroundColor: 'teal' }]}>
                                <ImageBackground source={require('./../../components/Images/image-2.png')}
                            style={styles.child}>
                                <View style={{position:'absolute',bottom:10,left:10}}>
                                <Text style={{color:'#fff',fontSize:RF(2.4),fontWeight:'bold'}}>O'Keefe's Bar & Grill</Text>
                                </View>
                        </ImageBackground>
                                </View>
                            </SwiperFlatList>
                        </View>
                        {/* <ImageBackground source={require('./../../components/Images/barpage.jpg')}
                            style={{ height: hp('34%'), width: wp("100%") }}>
                        </ImageBackground> */}
                        <View style={styles.view4}>
                            <TouchableOpacity
                                onPress={() => this.dialogopen()}
                                style={styles.touchable1}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Check-In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view5}>
                            <View style={{ width: '45%', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/send.png')} />
                                    <Text style={styles.text2}>0.3 mi</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/location.png')} />
                                    <Text style={styles.text2}>Mission Hills,Los Angeles</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/website.png')} />
                                    <Text style={styles.text2}>www.sample.com</Text>
                                </View>
                            </View>
                            <View style={{ width: '45%', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/mobile.png')} />
                                    <Text style={styles.text2}>(213) 222-331234</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/time.png')} />
                                    <Text style={styles.text2}>3:00 PM - 2:00 AM</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/calender.png')} />
                                    <Text style={styles.text2}>Opens Daily</Text>
                                </View>
                            </View>
                        </View>
                        {/* <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity>
                                <Image resizeMode="contain" style={{
                                    width: width - 40,
                                    height: (width * 0.11),
                                }}
                                    source={require('../../components/Images/uber.png')} />
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </ScrollView>
                <Dialog
                    visible={this.state.dialogclose}
                    onTouchOutside={() => {
                        this.setState({ dialogclose: false });
                    }}
                >
                    <DialogContent style={{
                        borderRadius: Platform.OS === 'android' ? 0 : 0,
                        width: wp('65%'),
                        height: hp('48%'),
                        shadowRadius: 10,
                        
                        
                    }}>
                        <View>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: 'bold',
                                    marginTop: 15,
                                    fontSize:RF(2.3)
                                }}>
                                    Check-In to O'Keefe's Bar & Grill
                                      </Text>
                            </View>
                            <View>
                                <View style={{
                                    marginTop: 25,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Text style={{ color: '#000', fontSize:RF(2.2) }}>Please select gender:</Text>
                                </View>
                                <View style={{
                                    marginTop: 15,
                                    alignSelf:'center',
                                    width:width/2 - 40
                                
                                  
                                }}>
                                    <RadioForm
                                        style={{ justifyContent: 'space-between' }}
                                        radio_props={radio_props}
                                        initial={0}
                                        buttonSize={5}
                                        buttonOuterColor="#000"
                                        labelColor="#000"
                                        buttonColor="#000"
                                        labelStyle={{ fontSize:RF(2.2), marginTop: -3 }}
                                        selectedButtonColor="#a13745"
                                        formHorizontal={true}
                                        onPress={(value) => { this.setState({ value: value }) }}
                                    />
                                </View>
                            </View>
                            <View>
                                <View style={{
                                    marginTop: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{ color: '#000', fontSize:RF(2.2) }}>Please select status:</Text>
                                </View>
                                <View style={{
                                    marginTop: 15,
                                    alignSelf:'center',
                                  width:width/2 - 30
                                }}>
                                    <RadioForm
                                        style={{ justifyContent: 'space-between' }}
                                        radio_props={radio_props2}
                                        initial={0}
                                        buttonSize={5}
                                        buttonOuterColor="#000"
                                        labelColor="#000"
                                        buttonColor="#000"
                                        labelStyle={{ fontSize:RF(2.2), marginTop: -3 }}
                                        selectedButtonColor="#a13745"
                                        formHorizontal={true}
                                        onPress={(value) => { this.setState({ value: value }) }}
                                    />
                                </View>
                            </View>
                            <View style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#f0dde1',
                                marginTop: 20
                            }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ dialogclose: false });
                                    }}>
                                    <Text style={{
                                        color: "#c42d3e",
                                        fontWeight: 'bold',
                                        marginTop: 10
                                    }}>
                                        Check-In
                                        </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                width: '100%',
                                height: 1,
                                backgroundColor: '#f0dde1',
                                marginTop: 10
                            }} />
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.setState({ dialogclose: false });
                                    }}>
                                    <Text style={{ color: "#000", fontWeight: 'bold' }}>Skip</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </DialogContent>
                </Dialog>
            </View>
        );
    }
}


export default Checkin;
