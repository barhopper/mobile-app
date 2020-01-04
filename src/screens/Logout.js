import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import images from '../../assets/images';
import { StackActions, NavigationActions } from 'react-navigation';
import AsyncStorage from "@react-native-community/async-storage";
import { CURRENT_USER } from "./../constants/Storage-key";
import firebase from "react-native-firebase";
export default class Logout extends Component {
    static navigationOptions = {
        drawerLabel: 'Logout',
        drawerIcon: ({tintColor}) => (
            <Image
                source={images.logout}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    constructor(props) {
        super(props);

        this.signOut().done();
    }

    signOut = async () => {
        console.log("here====>logout")
        AsyncStorage.removeItem(CURRENT_USER);
        AsyncStorage.removeItem('SET_ORDER');
        await firebase.auth().signOut();
        NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Login'}),
            ],
        });
    };

    reset(){
        this.props
            .navigation.reset('Login');

    }
    componentDidMount() {
        this.props
            .navigation.reset('Login');

    }

    render() {

        return (
            <View/>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        height: 20,
        width: 20
    }
});
