import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ImageBackground,
    Modal,
    ScrollView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SimpleButton from '../../common/SimpleButton';
import TextButton from '../../common/TextButton';
import Header from '../../common/Header';
import InputComponent from '../../common/InputComponent';
import images from "../../../assets/images";
import colors from "../../../assets/Colors";

export default class ResetPassword extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            showAlert: false,
        }
    };

    accept(){
        this.togglePrivacyAlertModal();
        this.props.navigation.navigate('NewPassword')
    }

    togglePrivacyAlertModal = () => {
        this.setState({ showAlert: !this.state.showAlert });
    };


    renderPrivacyAlert() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(0, 0, 0, 0.5)",}}>
                <View style={{
                    width: wp('60%'),
                    height: hp('20%'),
                    backgroundColor: '#fff',
                    borderColor:'#fff',
                    borderWidth: 1,
                    borderRadius: 5,
                }}>

                    <Text style={{fontSize: wp(3.5),fontWeight:'bold',textAlign: 'center',marginTop:hp(2)}}>Email Sent!</Text>
                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center',paddingLeft:wp(5),width: wp(55)}}>
                        <Text style={{fontSize:wp(3.2),textAlign:'center', fontWeight:'bold',marginTop:wp('0%'),color:colors.black}}>We have sent a reset password link to your email.</Text>
                    </View>

                    {/*Buttons*/}
                    <View
                        style={{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{marginLeft: wp('2%')}}>

                            <TouchableOpacity  onPress={()=>this.accept()} style={{
                                width: wp(55), height: hp('7%'),
                                backgroundColor: colors.orange,
                                borderRadius: 5,
                                justifyContent: 'center', alignItems: 'center',
                                borderColor: '#d0d0d0',
                                borderTopWidth: 1,
                            }}>
                                <Text style={{color: '#C42D3E', fontSize: wp(3.5),fontWeight:'bold'}}>Okay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            </View>


        )
    }



    render() {
        return(
            <ImageBackground style={styles.mainContainer} source={images.background}>

                {/*<Header*/}
                {/*    onPress={() => this.props.navigation.goBack()}*/}
                {/*    bgColor={'rgba(52, 52, 52, 0)'}*/}
                {/*    textColor={'#fff'}*/}
                {/*    imgLeftColor={'#fff'}*/}
                {/*    imgLeft={images.ic_left_arrow}*/}
                {/*    title={'Reset Password'} />*/}
                <Header onPress={() => this.props.navigation.goBack()} bgColor={'rgba(52, 52, 52, 0)'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow} title={'Reset Password'} />

                <View style={{alignItems: 'center',}}>
                    <Image style={styles.img} source={images.logo} />
                </View>

                <View>
                    <View style={styles.viewInput}>
                        <InputComponent bgColor={'#fff'} imgLeftColor={'#b0b0b0'} imgLeft={images.ic_email} InputHeight={hp(7)} InputWidth={wp(80)} placeholder={'Email'} placeholderTextColor={'#b0b0b0'} />
                    </View>
                    <Text style={styles.text}>Input the email used to create your account.</Text>
                    <Text style={styles.text}>We will send you a link to reset your password.</Text>
                </View>
                <View style={styles.viewBtn}>
                    <Modal
                        visible={this.state.showAlert}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={this.togglePrivacyAlertModal}
                    >
                        {this.renderPrivacyAlert()}
                    </Modal>
                <SimpleButton onPress={this.togglePrivacyAlertModal} btnHeight={hp(6)} bgColor={'#C42D3E'} btnWidth={wp(55)} textColor={'#fff'} title={'Reset Password'} />
                </View>
            </ImageBackground>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
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
        marginBottom:hp(16),
    },
    viewInput: {
        marginBottom:hp(4)
    }




});


