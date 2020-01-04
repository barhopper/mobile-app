import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import TextButton from '../../common/TextButton';
import Header from '../../common/Header';
import images from "../../../assets/images";
import IconButton from "../../common/IconButton";

export default class SignUpWith extends React.Component {


    render() {
        return(
             <ImageBackground style={styles.mainContainer} source={images.background}>
             <View style={styles.headerContainer}>
             <Header bgColor={'rgba(52, 52, 52, 0)'} textColor={'#fff'} title={'Sign Up With'} />
             </View>

                 <View style={styles.imgContainer}>
                 <Image style={styles.img} source={images.logo} />
             </View>

            <View >
             <View style={styles.viewLink}>
             <IconButton bgColor={'#42609C'} btnWidth={wp(60)} iconHeight={hp(15)} iconWidth={wp(12)} imgLeft={images.ic_fb} textColor={'#fff'} title={'Facebook'} />
             <IconButton bgColor={'#FF272F'} btnWidth={wp(60)} iconHeight={hp(5)} iconWidth={wp(4)} iconPaddingLeft={wp(4)} imgLeft={images.ic_google} textColor={'#fff'} title={'Google'} />
             <IconButton onPress={() => this.props.navigation.navigate('Signup')} bgColor={'#BA9738'} btnWidth={wp(60)} iconHeight={hp(5)} iconWidth={wp(5)} iconPaddingLeft={wp(4)} imgLeft={images.ic_email_2} textColor={'#fff'} title={'Email'} />
             <View style={{marginTop:hp(9)}}>
             <TextButton onPress={() => this.props.navigation.navigate('Login')}  title={'Already have an account?'}/>
             </View>
             </View>
             </View>
             </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        // flex:1,
        // backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'center'
    },
    headerContainer: {
        height:hp(10),
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingBottom:hp(20)
    },
    imgContainer: {
        height:hp(40),
        // backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:hp(9)
    },
    img: {
        height:hp(25),
        width:wp(100),
        resizeMode:'contain',

    },
    viewLink: {
        height:hp(53),
        // backgroundColor: 'orange',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginBottom:hp(9)
    }




});


