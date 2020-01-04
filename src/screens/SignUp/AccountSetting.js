import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import ImagePicker from 'react-native-image-picker';
import images from "../../../assets/images";
import SimpleButton from "../../common/SimpleButton";
import Header from "../../common/Header";


export default class Account extends Component {
    constructor(props) {
        super(props);
        this.state={
            ImageSource:"",
        };
    }

    selectPhoto=()=> {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                alert('You cancelled image picker ');
            } else if (response.error) {
                alert('And error occured: ', response.error);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imgSource: source
                });
            }
        });
    };

    render() {
        return (
                <View style={styles.container}>
                    <Header bgColor={'#C42D3E'} onPress={() => this.props.navigation.goBack()} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow} textColor={'#fff'} title={'About the App'} />
                    <View>
                    <TouchableOpacity style={styles.touchBtn} onPress={this.selectPhoto}>
                        {this.state.imgSource ? (
                            <Image
                                source={this.state.imgSource}
                                style={styles.image}
                            />
                        ) : (
                            <Image style={styles.image} source={images.avatar} />
                        )}
                    </TouchableOpacity>
                        <Text style={{color:'#C42D3E',fontWeight: 'bold',marginTop:hp(2)}}>john123@gmail.com</Text>
                    </View>
                    <View>
                        <Text style={styles.textHead}>{'Change Password'}</Text>
                    <View style={styles.viewInput}>
                        <TextInput placeholder={'Old Password'}/>
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput placeholder={'New Password'}/>
                    </View>
                    <View style={styles.viewInput}>
                        <TextInput placeholder={'Confirm New Password'}/>
                    </View>

                    </View>
                    <View>
                        <Text style={styles.textHead}>Following</Text>
                    <View style={styles.viewLink}>
                           <View style={{flexDirection: 'row',alignItems: 'center'}}>
                               <Image style={styles.img} source={images.bar}/>
                               <Text style={styles.text}>{'O kefee Bar & Grill'}</Text>
                           </View>
                        <View style={{marginTop:hp(1)}}>
                        <SimpleButton bgColor={'#C42D3E'} btnRadius={wp(1)} btnHeight={hp(5.5)} btnWidth={wp(22)} textColor={'#fff'} title={'Unfollow'} />
                        </View>
                    </View>
                    <View style={styles.viewLink}>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                            <Image style={styles.img} source={images.bar}/>
                            <Text style={styles.text}>{'O kefee Bar & Grill'}</Text>
                        </View>
                        <View style={{marginTop:hp(1)}}>
                        <SimpleButton bgColor={'#C42D3E'} btnRadius={wp(1)} btnHeight={hp(5.5)} btnWidth={wp(22)} textColor={'#fff'} title={'Unfollow'} />
                        </View>
                    </View>
                    </View>
                </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    touchBtn: {
        height:hp(15),
        width: wp(30),
        // backgroundColor: 'green',
        borderRadius:wp(4),
    },
    image: {
        width:wp(30),
        height:hp(15),
        borderRadius:wp(30),
        resizeMode: 'contain',
    },
    img: {
        width:wp(10),
        height:hp(10),
        resizeMode:'contain',
    },
    viewInput:{
        height: hp(8),
        width: wp(92),
        borderWidth:wp(0.2),
        borderRadius: wp(0.3),
        borderColor:'#ddd',
        borderBottomWidth:wp(0),
        shadowColor:'grey',
        shadowOffset:{width:wp(0.4), height:hp(2)},
        shadowOpacity:wp(0.4),
        shadowRadius:wp(2),
        elevation:wp(2),
        marginTop:hp(0),
        backgroundColor:'#fff',
        padding:wp(2),
        paddingTop:hp(1),
        marginBottom:hp(1.7),
    },
    viewLink: {
        flexDirection:'row',
        justifyContent: 'space-between',
        height:hp(8),
        width:wp(92),
        paddingHorizontal:wp(2),
        marginBottom: hp(1.7),
        borderWidth:wp(0.2),
        borderRadius: wp(0.3),
        borderColor:'#ddd',
        borderBottomWidth:wp(0),
        shadowColor:'grey',
        shadowOffset:{width:wp(0.4), height:hp(2)},
        shadowOpacity:wp(0.4),
        shadowRadius:wp(2),
        elevation:wp(2),
        marginTop:hp(0),
        backgroundColor:'#fff',

    },
    text: {
        paddingLeft:wp(2),
        fontFamily:'System',
    },
    textHead: {
        fontWeight:'bold',
        marginVertical:hp(1),
        fontFamily:'System',
    }
    // touch: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: 0.2,
    //     height:"8%",
    //     borderRadius: 25,
    //     marginHorizontal: 10,
    //     borderColor: 'red',
    //     width:'90%',
    //     marginBottom:10
    // },
    // text: {
    //     textAlign:'center',
    //     marginVertical:'40%'
    // }
});
