import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,CheckBox} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SimpleButton from '../../common/SimpleButton';
import TextButton from '../../common/TextButton';
import Header from '../../common/Header';
import InputComponent from '../../common/InputComponent';
import images from "../../../assets/images";
import colors from "../../../assets/Colors";

export default class Login extends React.Component {


    render() {
        return(
            <ImageBackground style={styles.mainContainer} source={images.background}>

                <Header onPress={() => this.props.navigation.goBack()} bgColor={'rgba(52, 52, 52, 0)'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow} title={'Login'} />

                <View style={styles.mainContainerImg}>
                    <Image style={styles.img} source={images.logo} />
                </View>

                <View style={{height:hp(55),paddingTop: hp(2),}}>
                        <View style={{marginBottom:wp(3)}}>
                            <InputComponent bgColor={'#fff'} imgLeftColor={'#b0b0b0'} imgLeft={images.ic_email} InputHeight={hp(7)} InputWidth={wp(80)} placeholder={'Email'} placeholderTextColor={'#b0b0b0'} />
                        </View>
                    <InputComponent bgColor={'#fff'} imgLeftColor={'#b0b0b0'} imgHeight={hp(3)} imgWidth={wp(3)} imgLeft={images.ic_password} InputHeight={hp(7)} InputWidth={wp(80)} placeholder={'Password'} placeholderTextColor={'#b0b0b0'}/>
                         <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',marginTop:hp(2)}}>
                         <Image style={{height:hp(5),width: wp(5),resizeMode: 'contain',tintColor:'#fff'}} source={images.ic_square} />
                         <Text style={{color:'#fff',marginLeft:wp(1),fontFamily:'System',
                         }}>Remember Me</Text>
                         </View>
                    <View style={{marginTop:wp(7),marginBottom:hp(7),alignItems:'center'}}>
                        <SimpleButton
                            bgColor={colors.secondary_Highlight}
                            textColor={'#fff'}
                            btnHeight={hp(6)}
                            btnWidth={wp(55)}
                            title={'Login'}
                            onPress={() => this.props.navigation.navigate('HomeScreen')}
                        />
                    </View>
                        <TextButton onPress={() => this.props.navigation.navigate('ResetPassword')} title={'Forgot Password?'}/>
                </View>
            </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    mainContainerImg: {
        height:hp(35),
        alignItems: 'center',
        paddingTop:hp(5)
    },
    headerContainer: {
        height:hp(15),
        backgroundColor: 'orange'
    },
    img: {
        height:hp(25),
        width:wp(100),
        resizeMode:'contain',
    }




});


