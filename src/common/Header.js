import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";

export default class Header extends React.Component {

    render() {
        let bgColor         = this.props.bgColor||"#A9B9AA";
        let headerHeight    = this.props.headerHeight||hp('10%');
        let headerWidth     = this.props.headerWidth||wp(100);
        let textColor       = this.props.textColor;
        let fontSize        = this.props.fontSize||wp(3.7);
        let textSize        = this.props.textSize||wp(3.7);
        let imgLeftColor    = this.props.imgLeftColor||"red";
        let imgRightColor   = this.props.imgRightColor||"red";

        return(

                <View style={[styles.containerView,{backgroundColor:bgColor},{height:headerHeight},{width:headerWidth}]}>

                     <View style={styles.viewImgLeft}>
                    <TouchableOpacity onPress={this.props.onPress} style={styles.containerTouchableLogo}>
                        <Image style={[styles.imgLeft,{tintColor:imgLeftColor}]} source={this.props.imgLeft}/>
                    </TouchableOpacity>
                     </View>

                    <View style={[styles.containerText]}>
                        <Text style={[styles.text,{color:textColor},{fontSize: fontSize}]}>{this.props.title}</Text>
                    </View>


                    <View style={styles.viewImgRight}>
                    <TouchableOpacity  onPress={this.props.onPressTextLink} style={styles.containerTouchableLogo}>
                        <Text style={[styles.text,{color:textColor},{fontSize: textSize}]}>{this.props.textLink}</Text>
                    </TouchableOpacity>
                    </View>

                </View>



        );
    }
}

const styles= StyleSheet.create({
    containerView: {
        width:wp(100),
        flexDirection:'row',
        alignItems: 'center',
        height: hp('15%'),
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
        // backgroundColor: "orange",
        justifyContent: 'center',
        alignItems:'center',
        // height:'100%',
        // marginEnd:wp(15),
        // backgroundColor:'pink',
        width:wp(76),
    },
    imgLeft: {
        height:hp(5),
        width:wp(5),
        resizeMode:'contain',
        // marginLeft:wp(6)
    },
    imgRight: {
        height:hp(5),
        width:wp(5),
        resizeMode:'contain',
        // marginLeft:wp(3)
    },
    viewImgLeft:{
        // backgroundColor:'orange',
        alignItems: 'center',
        justifyContent: 'center',
        width:wp(12),
    },
    viewImgRight:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'purple',
        width:wp(12),
    },
    text: {
        fontSize: wp(4),
        fontWeight:'700',
        textAlign:'center',
    }

});


