import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SettingLink from './SettingLink';
// import CustomButton from '../CustomButton';
import Header from "../../common/Header";
import images from "../../../assets/images";
import IconButton from "../../common/IconButton";
import {NavigationActions, StackActions} from "react-navigation";

export default class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    id: 0,
                    imgLeft: images.ic_account_settings,
                    title:'Account Setting',
                    imgRight:images.ic_settings_arrow,

                },
                {
                    id: 1,
                    imgLeft:images.ic_about_the_app,
                    title:'About the App',
                    imgRight:images.ic_settings_arrow,
                },
                {
                    id: 2,
                    imgLeft:images.ic_rate_app,
                    title:'Rate App',
                },
                {
                    id:3,
                    imgLeft: images.ic_report_app,
                    title:'Report a Problem',
                },
                {
                    id:4,
                    imgLeft:images.ic_terms,
                    title:'Terms and Conditions',
                    imgRight:images.ic_settings_arrow,
                },
                {
                    id:5,
                    imgLeft: images.ic_privacy,
                    title:'Privacy Policy',
                    imgRight:images.ic_settings_arrow,
                },
                {
                    id:6,
                    imgLeft: images.ic_upgrade,
                    title:'Upgrade to Business Account',
                },
            ]
        }
    }

    onNavigate (id){
        console.log("ID-->",id);
        if(id===0){
            this.props.navigation.navigate('AccountSetting')

        }else if(id===1){

            this.props.navigation.navigate('About')
        }
        else if (id===2) {
            this.props.navigation.navigate('RateApp')
        }
        else if (id===3) {
            this.props.navigation.navigate('Report')
        }
        else if (id===4) {
            this.props.navigation.navigate('Terms')
        }
        else if (id===5) {
            this.props.navigation.navigate('Privacy')
        }
        else {
            // this._signOut()
        }
    }

    _settingLink = item => {
        return (
            <SettingLink
                imgLeft={item.imgLeft}
                title={item.title}
                imgRight={item.imgRight}
                onPress={() => this.onNavigate(item.id)}

            />
        );
    };

    _navigate ()   {
        const navigateAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Login'})]
        });
        this.props.navigation.dispatch(navigateAction);
    };

    render() {
        const nav = this.props.navigation;
        return(
            <View style={styles.mainContainer}>
                <Header onPress={() => this.props.navigation.goBack()} bgColor={'#C42D3E'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow}  title={'Settings'} />
                <View style={styles.flatView}>
                <FlatList
                keyExtractor={item => item.id}
                data={this.state.links}
                renderItem={({item}) => this._settingLink(item)}
                />
                </View>
                <View style={styles.btnView}>
                    <IconButton onPress={() => this._navigate()} imgLeftMarginLeft={wp(4)}  bgColor={'#fff'} btnWidth={wp(100)} imgLeftColor={'#C42D3E'} imgLeft={images.ic_logout} textMarginRight={wp(62)} fontSize={wp(3.5)} textColor={'#C42D3E'} title={'Log Out'} />
                </View>

            </View>

        );
    }
}

const styles= StyleSheet.create({
    mainContainer: {
       flex:1,
       backgroundColor: '#F0F0F0',
    },
    container: {
        // backgroundColor:"#F4F4F4",
        paddingHorizontal:wp(3),
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
        height: hp(8),
        borderWidth:wp(0.1),
        // paddingBottom:wp(2)
    },
    containerLogo:{
        flexDirection:'row',
        alignItems: 'center'
    },
    img: {
        height:hp(5),
        width:wp(5),
        resizeMode:'contain',
        tintColor:'#fff',
    },
    text: {
        textAlign: 'center',
        marginStart:wp(2),
        fontFamily:'System',
    },
    flatView: {
        // paddingTop: hp(2),
    },
    btnView: {
        marginTop:hp(15)
    }



});


