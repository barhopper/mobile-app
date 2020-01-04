import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../common/Header';
import images from "../../../assets/images";
import SimpleButton from "../../common/SimpleButton";

export default class AccountVerified extends React.Component {


    render() {
        return(
            <ImageBackground style={styles.mainContainer} source={images.background}>
                <View>
                    <Header onPress={() => this.props.navigation.goBack()} bgColor={'rgba(52, 52, 52, 0)'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow}  title={'Account Verified'} />
                </View>
                <View style={{alignItems: 'center',marginTop:hp(7)}}>
                    <Image style={styles.img} source={images.logo} />
                    <View style={{marginTop:hp(7)}}>
                        <Text style={styles.text}>Your account is now verified.</Text>
                        <Text style={styles.text}>Please proceed to login.</Text>
                    </View>
                </View>
                <View style={styles.viewBtn}>
                    <SimpleButton
                        bgColor={'#C42D3E'}
                        btnWidth={wp(55)}
                        btnHeight={hp(6)}
                        textColor={'#fff'}
                        title={'Login'}
                        onPress={() => this.props.navigation.navigate('HomeScreen')}
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
        justifyContent:'flex-start'
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
        marginTop:hp(15),
    }

});


