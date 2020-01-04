import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import SimpleButton from "./SimpleButton";

export default class PromotionComponent extends React.Component {


    render() {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.viewUpper}>
                    <Text style={styles.textTitle}>{this.props.title}</Text>
                    <Text style={styles.text}>{this.props.subtitle}</Text>
                </View>

                <View  style={styles.viewBottom}>
                    <View style={styles.LeftInnerViewBottom}>
                      <Image style={styles.img} source={this.props.img} />
                    </View>

                    <View style={styles.rightInnerViewBottom}>
                        <View style={styles.lineView}/>
                        <Text style={styles.textDetail}>{this.props.text}</Text>
                        <View style={styles.viewBtn}>
                            <SimpleButton bgColor={'#C02F3D'}
                                          onPress={this.props.onPress}
                                          btnWidth={wp(40)}
                                          btnHeight={hp(6)}
                                          btnRadius={wp(0.5)}
                                          textColor={'#fff'}
                                          title={'View Promotion'} />
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        height:hp(29),
        backgroundColor:'#fff',
        marginHorizontal:wp(3),
        marginBottom:hp(1),
        marginTop:hp(1)
    },
    viewUpper:{
        height:'25%',
        padding:'2%',
    },
    viewBottom:{
        flexDirection: 'row',
        // backgroundColor:'green',
        height:'75%',
    },
    LeftInnerViewBottom:{
        height:'90%',
        width:'40%',
        // backgroundColor:"pink",
        paddingLeft:'2%'
    },
    rightInnerViewBottom:{
        height:'100%',
        width:'60%',
        // backgroundColor:"orange",
        justifyContent: 'space-between',
    },
    text: {
        textAlign:'left',
        fontSize: wp(2.8),
        color: 'grey',
        fontWeight: 'bold',
    },
    textTitle: {
        fontSize: wp(3.2),
        color: '#000000',
        fontWeight: 'bold',
        width:wp(100)
    },
    textDetail:{
        fontSize: wp(3),
        color: 'grey',
        fontWeight: 'bold',
        width:wp(50),
        paddingBottom:hp(4),
    },
    img: {
        resizeMode: 'cover',
        height: hp(20),
        width: wp(33),
    },
    lineView: {
        height:hp(0.3),
        width:wp(5),
        backgroundColor:'#C42D3E',
        marginBottom: hp(2)
    },
    viewBtn: {
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:hp(2)
    }

});


