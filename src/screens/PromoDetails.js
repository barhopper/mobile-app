import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import SimpleButton from "../common/SimpleButton";
import Header from "../common/Header";

export default class PromoDetails extends React.Component {


    render() {
        return(
            <View style={styles.mainContainer}>
                <Header bgColor={'#C02F3D'}
                        imgLeftColor={'#fff'}
                        imgLeft={images.ic_left_arrow}
                        textColor={'#fff'}
                        title={'Promo Details'}
                        onPress={() => this.props.navigation.goBack()}
                />
                <View style={styles.viewUpper}>
                    <Text style={styles.textTitle}>O KEEFE BAR & GRILL - 1ST ANNIVERSARY</Text>
                    <Text style={{color:'grey',marginTop:hp(0.2),fontSize:wp(2.8)}}>Tonight at 9 PM</Text>
                </View>
                <View style={styles.viewMiddle}>
                    <Image style={styles.img}  source={images.bar}/>
                </View>
                <View style={styles.viewText}>
                    <Text style={styles.text}>A party like no other!</Text>
                    <Text style={styles.text}>All drinks are unlimited for only $25/person, Bring your friends and get to avail the 10+1 promo! See you</Text>
                    <View style={styles.lineView}/>
                </View>
                <View style={styles.viewBottom}>
                    <View style={{flexDirection: 'row',alignItems: 'center',}}>
                    <View>
                        <Image style={styles.image} source={images.ic_boy} />
                    </View>
                    <View style={{marginBottom: hp(3.2)}}>
                        <Text style={{color:'#000000',fontSize:wp(3.2),fontWeight:'bold',marginStart:wp(3.5)}}>Stan Williams</Text>
                        <Text style={{color:'#C02F3D',marginStart:wp(3.5)}}>Organizer</Text>
                    </View>
                      </View>

                    <View style={styles.viewBtn}>
                        <SimpleButton bgColor={'#11A228'}
                                      btnWidth={wp(40)}
                                      btnHeight={hp(5.5)}
                                      btnRadius={wp(0.5)}
                                      textColor={'#fff'}
                                      title={'Get Directions'}
                                      // onPress={() =>this.props.navigation.navigate('')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        // backgroundColor:'pink'
    },
    container:{
        height:hp(40),
        backgroundColor:'#fff',
        marginHorizontal:wp(3),
        // marginBottom:hp(1),
        // marginTop:hp(1)
    },
    viewUpper:{
        height:hp(8.5),
        // backgroundColor:'green',
        paddingVertical: hp(1.5),
        marginHorizontal: wp(3),
    },
    viewMiddle:{
        height:hp(34),
        // backgroundColor:'blue',
        marginHorizontal: wp(3)
    },
    viewBottom:{
        height:hp(40),
        // backgroundColor:'yellow',
        marginHorizontal: wp(3),
        marginBottom:hp(2),
    },
    text: {
        textAlign:'left',
        fontSize: wp(3),
        color: '#000000',
        fontWeight: '400',
        marginVertical:hp(1),
        width:wp(94),
        fontFamily:'System',
    },
    viewText:{
        height:hp(13.5),
        // backgroundColor:'green',
        paddingVertical: hp(1.2),
        marginHorizontal: wp(3),
    },
    textTitle: {
        fontSize: wp(3.2),
        color: '#000000',
        fontWeight: 'bold',
        width:wp(94),
    },
    img: {
        resizeMode: 'cover',
        height: hp(34),
        width: wp(94),
    },
    lineView: {
        height:hp(0.3),
        width:wp(94),
        backgroundColor:'#C42D3E',
        marginTop: hp(1)
    },
    viewBtn: {
        justifyContent:'flex-end',
        alignItems: 'center',
        marginTop:hp(5),
    },
    image: {
        resizeMode: 'contain',
        height: hp(15),
        width: wp(15),
    }

});


