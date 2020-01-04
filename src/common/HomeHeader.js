import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";

export default class HomeHeader extends React.Component {

    render() {
        let bgColor=this.props.bgColor||"pink";
        let textColor=this.props.textColor||"red";
        let imgLeftColor=this.props.imgLeftColor||"red";
        let imgRightColor=this.props.imgRightColor||"red";

        return(

            <View style={[styles.containerView,{backgroundColor:bgColor}]}>
                 <View style={styles.viewImgLeft}>
                <View style={styles.textLinkView}>
                    <TouchableOpacity onPress={this.props.onPressText}>
                        <Text style={styles.textLink}>{this.props.textLink}</Text>
                    </TouchableOpacity>
                </View>
                 </View>

                <View style={[styles.containerText]}>
                    <Text style={[styles.text,{color:textColor}]}>{this.props.title}</Text>
                </View>

                <View style={styles.viewImgRight}>
                    <TouchableOpacity  onPress={this.props.onPressRightFirst} style={styles.containerTouchableLogo}>
                        <Image style={[styles.imgRight,{tintColor:imgRightColor}]} source={this.props.imgRightFirst}/>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.props.onPressRightMiddle} style={styles.containerTouchableLogo}>
                        <Image style={[styles.imgRight,{tintColor:imgRightColor}]} source={this.props.imgRightMiddle}/>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={this.props.onPressRightLast} style={styles.containerTouchableLogo}>
                        <Image style={[styles.imgRight,{tintColor:imgRightColor}]} source={this.props.imgRightLast}/>
                    </TouchableOpacity>
                </View>

            </View>



        );
    }
}

const styles= StyleSheet.create({
    containerView: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height: hp('12%'),
        paddingTop: hp('4%'),
    },
    containerTouchableLogo: {
        //  width:wp(15),
        //  backgroundColor:'yellow',
        // justifyContent:"center",
        //  alignItems:"center",
        //  paddingLeft:wp(4),
        //  height:"100%"

    },
    containerText: {
        // width:wp(70),
        // backgroundColor: "purple",
        justifyContent: 'center',
        alignItems:'center',
        paddingLeft:wp(11),
        // height:'100%',
        // marginEnd:wp(15),
        // backgroundColor:'pink',
        width:wp(52),
    },
    imgLeft: {
        height:hp(5),
        width:wp(5),
        resizeMode:'contain',
        marginLeft:wp(6)
    },
    imgRight: {
        height:hp(4.5),
        width:wp(4.5),
        resizeMode:'contain',
        marginLeft:wp(3)
    },
    viewImgLeft:{
        // backgroundColor:'yellow',
        alignItems: 'center',
        width:wp(18),
    },
    viewImgRight:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'gold',
        width:wp(30),
    },
    text: {
        fontSize: wp(4),
        fontWeight:'700',
        textAlign:'center',
    },
    textLinkView: {
        height:hp(3.2),
        width:wp(13),
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#C42D3E',
        borderRadius:wp(1),
        borderColor:'#fff',
        borderWidth:wp(0.2),
    },
    textLink:{
        fontSize: wp(2.3),
        color:'#fff'

    }

});


