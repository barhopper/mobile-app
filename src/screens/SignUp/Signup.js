import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,ImageBackground,ScrollView,Modal} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SimpleButton from '../../common/SimpleButton';
import TextButton from '../../common/TextButton';
import Header from '../../common/Header';
import InputComponent from '../../common/InputComponent';
import images from "../../../assets/images";
import TickCircle from "../../common/TickCircle";
import colors from "../../../assets/Colors";

export default class Signup extends React.Component {


    constructor(props)
    {
        super(props);
        this.state = {
            showAlert: false,
        }
    };

    accept(){
        this.togglePrivacyAlertModal();
        this.props.navigation.navigate('HomeScreen')
    }

    cancel(){
        this.setState({ showAlert: !this.state.showAlert });
    }

    term(){
        this.setState({ showAlert: !this.state.showAlert });
        this.props.navigation.navigate('Terms')
    }

    privacy(){
        this.setState({ showAlert: !this.state.showAlert });
        this.props.navigation.navigate('Privacy')
    }

    togglePrivacyAlertModal = () => {
        this.setState({ showAlert: !this.state.showAlert });
    };


    renderPrivacyAlert() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(0, 0, 0, 0.5)",}}>
                <View style={{
                    width: wp('80%'),
                    height: hp('25%'),
                    backgroundColor: '#fff',
                    borderColor:'#fff',
                    borderWidth: 1,
                    borderRadius: 5,
                }}>


                    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>

                        <View style={{flex: 2, flexDirection: 'row', alignItems: 'center',width:wp('75%'),justifyContent:'center'}}>
                            <TouchableOpacity onPress={()=>this.term()}>
                                <Text style={{color:'#C42D3E', fontSize:wp('4%'), fontWeight:'bold', textDecorationLine: 'underline'}}>
                                    Terms of Service</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:wp('4%'), fontWeight:'bold', color:colors.black}}> and </Text>
                            <TouchableOpacity onPress={()=>this.privacy()}>
                                <Text style={{color:'#C42D3E', fontSize:wp('4%'), fontWeight:'bold', textDecorationLine: 'underline'}}>Privacy
                                    Policy</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize:wp('4%'), fontWeight:'bold',marginTop:wp('-10%'),color:colors.black}}>by signing in you agree on above</Text>


                    </View>

                    {/*Buttons*/}
                    <View
                        style={{flex: 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <View style={{marginLeft: wp('2%')}}>

                            <TouchableOpacity  onPress={()=>this.accept()} style={{
                                width: wp('36%'), height: hp('7%'),
                                backgroundColor: colors.orange,
                                borderRadius: 5,
                                justifyContent: 'center', alignItems: 'center',
                                borderColor: '#d0d0d0',
                                borderWidth: 1,
                            }}>
                                <Text style={{color: colors.white, fontSize: wp('4%')}}>Agree</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginRight: wp('2%')}}>
                            <TouchableOpacity onPress={()=>this.cancel()} style={{
                                width: wp('36%'), height: hp('7%'),
                                backgroundColor: colors.white,
                                borderColor: '#d0d0d0',
                                borderRadius: 5,
                                borderWidth: 1, justifyContent: 'center', alignItems: 'center'

                            }}>
                                <Text style={{color:colors.primary_Content, fontSize: wp('4%')}}>Cancel</Text>
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

                <Header onPress={() => this.props.navigation.goBack()} bgColor={'rgba(52, 52, 52, 0)'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow} title={'Sign Up'} />

                <View style={styles.mainContainerImg}>
                    <Image style={styles.img} source={images.logo} />
                </View>
                    <Modal
                        visible={this.state.showAlert}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={this.togglePrivacyAlertModal}
                    >
                        {this.renderPrivacyAlert()}
                    </Modal>
                <View style={styles.mainContainerInput}>
                        <InputComponent bgColor={'#fff'} imgLeftColor={'#b0b0b0'} imgLeft={images.ic_email} InputHeight={hp(7)} InputWidth={wp(80)} placeholder={'Email'} placeholderTextColor={'#b0b0b0'} />
                        <View style={styles.viewCheck}>
                        <TickCircle img={images.ic_check_filter_1} title={'Valid email.'}/>
                        <TickCircle img={images.ic_check_filter_1} title={'Not in use.'}/>
                        </View>
                        <InputComponent bgColor={'#fff'} imgLeftColor={'#b0b0b0'} imgHeight={hp(3)} imgWidth={wp(3)} imgLeft={images.ic_password} InputHeight={hp(7)} InputWidth={wp(80)} placeholder={'Password'} placeholderTextColor={'#b0b0b0'}/>
                        <View style={styles.viewCheck}>
                        <TickCircle img={images.ic_check_filter_1} title={'At least 6 characters long'}/>
                        <TickCircle img={images.ic_check_filter_1} title={'Contains a letter.'}/>
                        <TickCircle img={images.ic_check_filter_1} title={'Contains a number.'}/>
                        <TickCircle img={images.ic_check_filter_1} title={'Contains a special character.'}/>
                        </View>
                         <View style={styles.viewBtn}>
                        <SimpleButton onPress={this.togglePrivacyAlertModal} bgColor={'#C42D3E'} btnHeight={hp(6)} btnWidth={wp(55)} textColor={'#fff'} title={'Sign Up'} />
                         </View>
                        <TextButton onPress={() => this.props.navigation.navigate('Login')} title={'Already have an account?'}/>
                </View>

            </ImageBackground>


        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        // backgroundColor: 'rgba(0, 0, 0, 0.4)',
        // paddingTop:hp(10),
        alignItems:'center',
        justifyContent:'center',
        paddingTop:hp(10)
    },
    headerContainer: {
        // height:hp(12),
        // backgroundColor: 'green'
    },
    img: {
        height:hp(25),
        width:wp(100),
        resizeMode:'contain',
    },
    mainContainerImg:{
        alignItems: 'center',
        // marginTop:hp(0),
    },
    mainContainerInput:{
        height:hp(72),
        marginTop:wp(5),
        alignItems:'center'
    },
    viewBtn: {
        marginTop: hp(3),
        marginBottom:hp(1)
    },
    viewCheck:{
        marginVertical:wp(1.5),
        justifyContent: 'flex-start',
        width:wp(76),
    }




});

