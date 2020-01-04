import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions, SafeAreaView
} from 'react-native';

import images from '../../assets/images';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import colors from '../../assets/Colors';
import config from '../../assets/Config';
import ImagePicker from "react-native-image-picker";
import apiService from "../firebase/FirebaseHelper";

const {width, height} = Dimensions.get('window');

export default class Profile extends Component {

    static navigationOptions = ({navigation}) => ({

        drawerLabel: 'Profile',
        drawerIcon: ({tintColor}) => (
            <Image
                source={images.account}
                style={[{width: 20, height: 20}, {tintColor: tintColor}]}
                resizeMode={'contain'}
            />
        ),
    });

    constructor(props) {
        super(props);
    }


    render() {
        const nav = this.props.navigation;
        return (
            <View>

                {/*HEADER*/}
                <View source={images.bg_image} style={{
                    height: height / 9,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.blue
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, marginLeft: wp('2%')}}>
                            <TouchableOpacity onPress={() => nav.openDrawer()}>
                                <Image
                                    style={{width: wp(config.h_b_b_w), height: hp(config.h_b_b_h)}}
                                    source={images.menu}
                                    resizeMode='contain'
                                /></TouchableOpacity>
                        </View>
                        <View style={{flex: 4, alignItems: 'center'}}><Text
                            style={{color: colors.white, fontSize: wp(config.h_t_f_s)}}>Driver Profile</Text></View>
                        <View style={{flex: 1, backgroundColor: 'orange'}}></View>

                    </View>
                </View>

                <View>

                            <Image source={images.avatar2}
                                   style={{width: width / 3, height: width / 3, alignSelf:'center', marginTop: hp('2%')}} />

                    <Text style={{fontSize: wp('6%'), fontWeight: 'bold', color:colors.black,
                        marginTop: hp('1%'), alignSelf:'center'}}>
                        John Doe Murphy
                    </Text>

                    <Text style={{fontSize: wp('4%'), color:colors.gray,
                        alignSelf:'center'}}>
                        john@gmail.com
                    </Text>
                    <TouchableOpacity style={styles.listItems}>
                        <Text style={{color: colors.black, fontSize: wp('4.5%'), fontWeight:'bold',
                            marginLeft:wp('3%')
                        }}>Bank Accounts</Text>
                        <Image source={images.right_arrow}
                               style={{width: wp('2.5%'), height: hp('2.5%'), marginRight:wp('3%')}}/>
                    </TouchableOpacity>

                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    listItems: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: hp('5%'),
        borderWidth: 0.3,
        borderTopColor: colors.gray,
        borderBottomColor: 'black',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        height: hp('7%'),
    },

});
