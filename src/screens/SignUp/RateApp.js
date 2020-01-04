import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../common/Header';
import images from "../../../assets/images";
import SimpleButton from "../../common/SimpleButton";
import InputComponent from "../../common/InputComponent";

export default class RateApp extends React.Component {


    render() {
        return(
            <View style={styles.mainContainer} source={images.background}>
                <View>
                    <Header onPress={() => this.props.navigation.goBack()} bgColor={'#C42D3E'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow}  title={'Rate App'} />
                    <View style={{alignItems: 'center',marginTop:hp(2)}}>
                        <View style={styles.viewStar}>
                        <Image style={styles.img} source={images.ic_star} />
                        <Image style={styles.img} source={images.ic_star} />
                        <Image style={styles.img} source={images.ic_star} />
                        <Image style={styles.img} source={images.ic_star} />
                        <Image style={styles.img} source={images.ic_star} />
                        </View>
                    </View>
                    <Text style={styles.text}>{'Comments:'}</Text>
                    <View style={styles.viewInput}>
                        <View style={styles.viewInputLayout}>
                         <TextInput placeholder={'Enter comment'}/>
                        </View>
                    </View>
                </View>

                <View style={styles.viewBtn}>
                    <SimpleButton
                        btnHeight={hp(6)}
                        bgColor={'#C42D3E'}
                        btnWidth={wp(47)}
                        textColor={'#fff'}
                        title={'Submit'} />

                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        // backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    img: {
        height:hp(7),
        width:wp(7),
        resizeMode:'contain',
        marginStart:wp(2)
    },
    text: {
        fontSize:wp(4),
        color:'#000000',
        // textAlign: 'center',
        marginStart: wp(4),
        fontFamily:'System',
    },
    viewBtn: {
        marginTop:hp(40),
    },
    viewStar:{
        flexDirection:'row'
    },
    viewInput:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:hp(2),
    },
    viewInputLayout:{
        height: hp(20),
        width: wp(92),
        borderWidth:wp(0.3),
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
    }

});


