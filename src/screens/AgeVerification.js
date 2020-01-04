import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Platform,
    SafeAreaView
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import AsyncStorage from "@react-native-community/async-storage";
import { CURRENT_USER } from "../constants/Storage-key";
import HUD, {LoadingHUD} from "react-native-hud-hybrid";
import apiService from '../firebase/FirebaseHelper';
import images from "../../assets/images";
import config from "../../assets/Config";
import colors from "../../assets/Colors";
import ImagePicker from 'react-native-image-picker';

export default class AgeVerification extends Component {

    constructor(props) {
        super(props);

        this.loadingHUD = new LoadingHUD();
        this.state = {
            showImage: false,
            imagePath: '',
        };
    }

    componentDidMount() {
        HUD.config({
            loadingText: "Loading ..."
        });
    }

    openCamera = () => {
        if (this.state.showImage === false) {
            const options = {
                quality: 1.0,
                maxWidth: 500,
                maxHeight: 500,
                storageOptions: {
                    skipBackup: true
                }
            };
            ImagePicker.launchCamera(options, async (response) => {
                const imageName = await this.generateString(15);
                this.loadingHUD.show();
                let source = { uri: response.uri };
                await apiService.uploadImage(source, imageName);
                await apiService.setImageNameToUserFirestore(imageName);
                this.loadingHUD.hideAll();
                this.setState({ imagePath: response.uri, showImage: true });
            });
        } else {
            this.props.navigation.navigate('Home');
        }
    };

    generateString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: hp('25%'),
                    width: '100%',
                    backgroundColor: colors.blue
                }}>
                    <SafeAreaView style={{flexDirection: 'column',marginTop:Platform.OS==='ios'?20:hp('2%') }}>
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View style={{flex: 1, marginLeft: wp('2%')}}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                    <Image
                                        style={{width: wp(config.h_b_b_w), height: hp(config.h_b_b_h)}}
                                        source={images.back}
                                        resizeMode='contain'
                                    /></TouchableOpacity>
                            </View>
                            <View style={{alignItems: 'center', marginRight: wp('28%'), bottom: 5 }}><Text
                                style={{color: colors.white, fontSize: wp(config.h_t_f_s)}}>Age Verification</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                marginTop: hp('5%')
                            }}
                        >
                            <Text style={{ color: colors.white}}>To Purchase alcohol please take</Text>
                            <Text style={{ color: colors.white}}>a selfie of your state ID,shown</Text>
                            <Text style={{ color: colors.white}}>displayed next to their face.</Text>
                        </View>
                    </SafeAreaView>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        marginTop: hp('20%'),
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: colors.blue,
                            width: wp('60%'),
                            height: hp('8%'),
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 4
                        }}
                        onPress={()=> this.openCamera()}
                    >
                        <Text style={{ color: colors.white, fontSize: 16}}>
                            {this.state.showImage === false ? 'Open Camera' : 'Verify'}
                        </Text>
                    </TouchableOpacity>
                </View>
                { this.state.showImage === true && (
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image style={styles.image} source={{uri: this.state.imagePath}} resizeMode='contain' />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: hp('30%'),
        width: wp('30%')
    }
});
