import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../common/Header';
import images from "../../../assets/images";
import AsyncStorage from "@react-native-community/async-storage";
import {CURRENT_USER} from "../../constants/Storage-key";
import {NavigationActions, StackActions} from "react-navigation";

export default class EmailConfirm extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
                setTimeout(() => {
                    this.props.navigation.navigate('AccountVerified');
                }, 1700);
    }


    render() {
        return(
            <ImageBackground style={styles.mainContainer} source={images.background}>
                <View>
                    <Header onPress={() => this.props.navigation.goBack()} bgColor={'rgba(52, 52, 52, 0)'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow}  title={'Email Confirmed'} />
                </View>
                <View style={{alignItems: 'center',marginTop:hp(7)}}>
                    <Image style={styles.img} source={images.logo} />
                    <View style={{marginTop:hp(7)}}>
                        <Text style={styles.text}>Email confirmation sent!</Text>
                    </View>
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

});


