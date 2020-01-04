import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import SimpleButton from "./SimpleButton";

export default class FollowingComponent extends React.Component {


    render() {
        return(
            <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                    <View style={styles.containerImg}>
                        <Image style={styles.img} source={this.props.img}/>
                    </View>
                    <View style={styles.containerText}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between',}}>
                            <Text numberOfLines={1} style={styles.textTitle}>{this.props.title}</Text>
                            <Text numberOfLines={1} style={styles.textSubTitle}>{this.props.distance}</Text>
                        </View>
                        <View style={styles.lineView}/>
                        <View style={styles.textView}>
                            <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.text}>{this.props.description}</Text>
                        </View>
                        <View style={styles.viewBtn}>
                        <SimpleButton bgColor={'#C02F3D'}
                                          // btnMarginStart={wp(3)}
                                      btnWidth={wp(58)}
                                      btnHeight={hp(6)}
                                      btnRadius={wp(0.5)}
                                      textColor={'#fff'}
                                      title={'Unfollow'} />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        // backgroundColor:'grey',
        alignItems:'center',
    },
    text: {
        textAlign:'left',
        fontSize: wp(2.7),
        color: '#000000',
        // fontWeight: 'bold',
        paddingBottom: hp(0.5),
        fontFamily:'System',
    },
    textTitle: {
        fontSize: wp(3.2),
        color: '#000000',
        fontWeight: 'bold',
        paddingBottom:hp(1),
        width:wp(45),
        marginTop:hp(1),
        fontFamily:'System',
    },
    textSubTitle: {
        fontSize: wp(3),
        color: '#C42D3E',
        // fontWeight: 'bold',
        paddingRight:wp(3),
        width:wp(13),
        marginTop:hp(1),
        fontFamily:'System',
    },
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height:hp(21),
        width:wp(94),
        backgroundColor:'#fff',
        borderBottomLeftRadius:wp(2),
        borderTopLeftRadius:wp(2),
        marginBottom: hp(1.5),
    },
    containerImg: {
        width:wp(29),
    },
    containerText: {
        width:wp(65),
    },
    img: {
        resizeMode: 'cover',
        height: hp(21),
        width: wp(25),
        borderBottomLeftRadius:wp(2),
        borderTopLeftRadius:wp(2),
        // paddingLeft:wp(2)
    },
    imgView: {

    },
    textView:{
        width:wp(50),
    },
    lineView: {
        height:hp(0.3),
        width:wp(5),
        backgroundColor:'#C42D3E',
        marginBottom: hp(2)
    },
    viewBtn: {
        marginTop:hp(0.5)
    }

});


