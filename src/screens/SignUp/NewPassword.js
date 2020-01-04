import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SimpleButton from '../../common/SimpleButton';
import TextButton from '../../common/TextButton';
import Header from '../../common/Header';
import InputComponent from '../../common/InputComponent';
import images from "../../../assets/images";

export default class NewPassword extends React.Component {


    render() {
        return(
            <ImageBackground style={styles.mainContainer} source={images.background}>
                <View>
                    <Header onPress={() => this.props.navigation.goBack()} bgColor={'rgba(52, 52, 52, 0)'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow}  title={'New Password'} />
                </View>
                <View style={{alignItems: 'center',}}>
                    <Image style={styles.img} source={images.logo} />
                </View>

                <View>
                    <View style={styles.viewInput}>
                        <InputComponent bgColor={'#fff'} imgLeftColor={'#b0b0b0'} imgHeight={hp(3)} imgWidth={wp(3)} imgLeft={images.ic_password} InputHeight={hp(7)} InputWidth={wp(80)} placeholder={'New Password'} placeholderTextColor={'#b0b0b0'}/>
                    </View>
                    <View style={styles.viewInput}>
                        <InputComponent bgColor={'#fff'} imgLeftColor={'#b0b0b0'} imgHeight={hp(3)} imgWidth={wp(3)} imgLeft={images.ic_password} InputHeight={hp(7)} InputWidth={wp(80)} placeholder={'Confirm New Password'} placeholderTextColor={'#b0b0b0'}/>
                    </View>
                    <View style={{paddingTop:hp(2)}}>
                    <Text style={styles.text}>Input the email used to create your account.</Text>
                    <Text style={styles.text}>We will send you a link to reset your password.</Text>
                    </View>
                </View>
                <View style={styles.viewBtn}>
                    <SimpleButton
                        bgColor={'#C42D3E'}
                        btnWidth={wp(55)}
                        btnHeight={hp(6)}
                        textColor={'#fff'} title={'Save Changes'}
                        onPress={() => this.props.navigation.navigate('EmailConfirm')}
                    />
                </View>
            </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        // backgroundColor:'grey',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerContainer: {
        // height:hp(15),
        backgroundColor: 'orange'
    },
    img: {
        height:hp(25),
        width:wp(100),
        resizeMode:'contain',
    },
    text: {
        fontSize:wp(4),
        color:'#fff',
        textAlign: 'center',
        fontFamily:'System',
    },
    viewBtn: {
        marginBottom:hp(12),
    },
    viewInput: {
        marginBottom:hp(2)
    }




});


