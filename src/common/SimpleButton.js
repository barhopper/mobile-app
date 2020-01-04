import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";

export default class SimpleButton extends React.Component {


    render() {
        let bgColor=this.props.bgColor;
        let textColor=this.props.textColor||"red";
        let btnWidth=this.props.btnWidth||wp(100);
        let btnHeight=this.props.btnHeight||wp(12);
        let btnRadius=this.props.btnRadius||wp(0);
        let btnMarginStart=this.props.btnMarginStart;
        let fontSize=this.props.fontSize || wp(3.3);
        let iconPaddingLeft=this.props.iconPaddingLeft;
        let iconPaddingRight=this.props.iconPaddingRight;


        return(
            <View style={styles.container} >
                  <TouchableOpacity onPress={this.props.onPress} style={[styles.containerTouchable,{backgroundColor:bgColor},{width:btnWidth},{height:btnHeight},{borderRadius:btnRadius},{paddingLeft:iconPaddingLeft},{marginStart:btnMarginStart}]}>
                          <Text style={[styles.text,{color:textColor},{fontSize:fontSize}]}>{this.props.title}</Text>
                  </TouchableOpacity>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        // alignItems:'center',
        // justifyContent:'center',

    },
    containerTouchable: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        height: hp(6),
        // width:wp(100),
        // marginStart:wp(3),
        marginBottom:hp(2),
    },

    text: {
        fontSize: wp(3.5),
        fontWeight:'700',
        color: '#fff',
        textAlign:'center',
        fontFamily:'System',
    }




});


