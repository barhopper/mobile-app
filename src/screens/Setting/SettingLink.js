import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class SettingLink extends React.Component {

    render() {
        return(
                <View style={styles.mainContainer}>
                <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
                <View style={styles.containerLogo}>
                <Image style={styles.imgLeft} source={this.props.imgLeft} />
                <Text style={styles.text}>{this.props.title}</Text>
                </View>
                <View>
                <Image style={styles.imgRight} source={this.props.imgRight} />
                </View>
                </TouchableOpacity>
                </View>

        );
    }
}

const styles= StyleSheet.create({
    mainContainer: {
        // marginHorizontal:wp(4),
        paddingTop:hp(0.5)
    },
    container: {
        backgroundColor:"#fff",
        paddingHorizontal:wp(4),
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height: hp(8),
        // borderWidth:wp(0.1),
        // marginBottom:hp(0.5),
        // paddingBottom:wp(2),
    },
    containerLogo:{
        flexDirection:'row',
        alignItems: 'center'
    },
    imgLeft: {
        height:hp(4),
        width:wp(4),
        resizeMode:'contain',
    },
    imgRight: {
        height:hp(2),
        width:wp(2),
        resizeMode:'contain',
    },
    text: {
        textAlign: 'center',
        marginStart:wp(6),
        color:'#000000',
        fontFamily:'System',
    }




});


