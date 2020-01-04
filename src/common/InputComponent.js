import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";


export default class InputComponent extends React.Component {

    render() {
        let bgColor=this.props.bgColor||"#A9B9AA";
        let InputWidth=this.props.InputWidth||wp(40);
        let InputHeight=this.props.InputHeight||wp(8);
        let imgLeftColor=this.props.imgLeftColor||"red";
        let imgMiddleColor=this.props.imgMiddleColor||"red";
        let imgRightColor=this.props.imgRightColor||"red";
        let imgHeight=this.props.imgHeight || hp(4);
        let imgWidth=this.props.imgWidth || wp(4);
        return(


            <View style={[styles.containerView,{backgroundColor:bgColor},{width:InputWidth},{height:InputHeight}]}>
                <Image style={[styles.img,{tintColor:imgLeftColor},{height:imgHeight},{width:imgWidth}]} source={this.props.imgLeft} />
                <TextInput
                    style={styles.textInput}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                />
                <Image style={[styles.imgMiddle,{tintColor:imgMiddleColor}]} source={this.props.imgMiddle} />
                <TouchableOpacity onPress={this.props.onPress}>
                <Image style={[styles.img,{tintColor:imgRightColor}]} source={this.props.imgRight} />
                </TouchableOpacity>
            </View>



        );
    }
}

const styles= StyleSheet.create({
    containerView: {
        backgroundColor:"#A9B9AA",
        paddingHorizontal:wp(3),
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height: hp(8),
        // borderWidth:wp(0.1),
        // paddingBottom:wp(2)
    },
    textInput: {
        flex:1,
        paddingLeft:wp(2),
    },
    img: {
        height:hp(4),
        width:wp(4),
        resizeMode:'contain',
        tintColor:'red',
    },
    imgMiddle: {
        height:hp(4),
        width:wp(4),
        resizeMode:'cover',
        tintColor:'#fff',
    },
    text: {
        fontSize: wp(4),
        fontWeight:'700',
        color: 'red',
        textAlign:'center',
    }




});


