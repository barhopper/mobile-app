import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SimpleButton from '../../common/SimpleButton';
import images from '../../assests/images';
import TextButton from '../../common/TextButton';
import Header from '../../common/Header';

export default class SelectUserType extends React.Component {


    render() {
        return(
            <View style={styles.mainContainer}>
                <View style={{height:hp(8),justifyContent: 'center',alignItems: 'center',}}>
                    <Header bgColor={'#fff'} textColor={'#87202C'} title={'Select User Type'} />

                </View>
                <View style={{height:hp(45),alignItems: 'center',justifyContent: 'center'}}>
                    <Image style={styles.img} source={images.ic_flower} />
                </View>

                <View style={{height:hp(47),alignItems: 'center',}}>
                    <View >
                        <SimpleButton onPress={() => this.props.navigation.navigate('Sign')} bgColor={'#87202C'} img={images.ic_cart} title={'Buyer'} />
                        <SimpleButton bgColor={'#87202C'} img={images.ic_avatar2} title={'Seller'} />
                    </View>
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
        justifyContent:'center'
    },
    headerContainer: {
        height:hp(15),
        backgroundColor: 'orange'
    },
    img: {
        height:hp(20),
        width:wp(30),
        resizeMode:'cover',
    }




});


