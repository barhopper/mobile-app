import React, {Component} from 'react';
import {View, Image, StyleSheet, Platform,ImageBackground} from 'react-native';
import {NavigationActions, StackActions} from "react-navigation";
import AsyncStorage from "@react-native-community/async-storage";
import { CURRENT_USER } from "../constants/Storage-key";
import images from './../../assets/images';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        AsyncStorage.getItem(CURRENT_USER).then((resp) => {
            const response = JSON.parse(resp);
            if(response !== null) {
                // this.props.setUserInfo(response);
                setTimeout(() => {
                    this.props.navigation.navigate('HomeScreen');
                }, 1500);
            } else {
                setTimeout(() => {
                    const navigateAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({routeName: 'SignWith'})]
                    });
                    this.props.navigation.dispatch(navigateAction);
                }, 1500);
            }
        });
    }

    render() {
        return (
            <View style={styles.backgroundImage}>
                <View style={styles.container}>
                    <ImageBackground style={styles.imageContainer} source={images.background}>
                        <Image style={styles.img} source={images.logo} />
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 35,
        fontFamily:'System',
        textShadowColor: 'blue',
        textShadowOffset: {width: 3, height: 0},
        textShadowRadius: 0,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexWrap: 'wrap',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center'
    },
    img: {
        height:hp(30),
        width:wp(100),
        resizeMode:'contain'
    }
});
