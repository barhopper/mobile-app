import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";

export default class PlaceComponent extends React.Component {


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
        fontSize: wp(3),
        color: 'grey',
        // fontWeight: 'bold',
        width:wp(60),
        paddingTop:hp(0.3),
        paddingBottom: hp(4),
    },
    textTitle: {
        fontSize: wp(3.2),
        color: '#000000',
        fontWeight: 'bold',
        paddingBottom:hp(1),
        width:wp(45),
    },
    textSubTitle: {
        fontSize: wp(3.1),
        color: '#C42D3E',
        // fontWeight: 'bold',
        paddingRight:wp(4),
        width:wp(18),
        // backgroundColor:'red'
    },
    container: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height:hp(17),
        width:wp(94),
        backgroundColor:'#fff',
        borderBottomLeftRadius:wp(2),
        borderTopLeftRadius:wp(2),
        marginBottom: hp(1.5),
    },
    containerImg: {
        width:wp(29),
        // backgroundColor:'red'

    },
    containerText: {
        width:wp(71),
        // backgroundColor:'green'
    },
    img: {
        resizeMode: 'cover',
        height: hp(17),
        width: wp(26),
        borderBottomLeftRadius:wp(2),
        borderTopLeftRadius:wp(2),
        // paddingLeft:wp(2)
    },
    imgView: {

    },
    textView:{
        width:wp(60),
    },
    lineView: {
        height:hp(0.3),
        width:wp(5),
        backgroundColor:'#C42D3E',
        marginBottom: hp(2)
    }

});


