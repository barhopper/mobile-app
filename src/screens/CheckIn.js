import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView, TouchableOpacity, Modal,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import Header from "../common/Header";
import SimpleButton from "../common/SimpleButton";
import Swiper from "../Component/swiper";
import colors from "../../assets/Colors";
import {color} from "react-native-reanimated";
import Button from "../common/Button";
import RadioButton from "../common/RadioButton";


export default class CheckIn extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            showAlert: false,
        }
    };

    accept(){
        this.togglePrivacyAlertModal();
    }

    cancel(){
        this.setState({ showAlert: !this.state.showAlert });
    }

    togglePrivacyAlertModal = () => {
        this.setState({ showAlert: !this.state.showAlert });
    };


    renderPrivacyAlert() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "rgba(0, 0, 0, 0.5)",}}>
                <View style={styles.modalContainer}>
                    <View style={styles.viewModalText}>
                        <Text style={styles.textTitle}>Check-In to O'Keefe's Bar & Grill</Text>
                    </View>
                    <View style={styles.viewRadioBtn}>
                        <View style={{justifyContent: 'center',alignItems: 'center'}}>
                            <Text style={styles.text}>Please select gender:</Text>
                            <View style={styles.viewInnerRadioBtn}>
                                <View><RadioButton radioTitle={'Male'} /></View>
                                <View><RadioButton radioTitle={'Female'} /></View>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center',alignItems: 'center',paddingTop:hp(2.5)}}>
                            <Text style={styles.text}>Please select status:</Text>
                            <View style={styles.viewInnerRadioBtn}>
                                <View><RadioButton radioTitle={'Single'} /></View>
                                <View><RadioButton radioTitle={'Not Single'} /></View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewModalBtnUpper}>
                        <TouchableOpacity onPress={() => this.accept()}>
                            <Text style={styles.textViewModalBtnUpper}>Check-In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewModalBtnBottom}>
                        <TouchableOpacity onPress={() => this.cancel()}>
                            <Text style={styles.textViewModalBtnBottom}>Skip</Text>
                        </TouchableOpacity>
                    </View>

                </View>



            </View>


        )
    }



    render() {

        return (
            <View style={styles.viewStyle}>
                <Header bgColor={'#C02F3D'}
                        imgLeftColor={'#fff'}
                        imgLeft={images.ic_left_arrow}
                        textColor={'#fff'}
                        title={'OKeefe Bar & Grill '}
                        onPress={() => this.props.navigation.goBack()}
                />
                <ScrollView>
                    <View style={styles.container}>
                        <Swiper
                            dot={<View style={styles.dot} />}
                            activeDot={<View style={styles.activeDot} />}
                            paginationStyle={{
                                bottom:wp(3), left: null, right: wp(3)
                            }}
                        >
                            <View style={styles.slide} title={<Text style={styles.textSlider} numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                                <Image resizeMode='stretch' style={styles.image} source={images.bar} />
                            </View>
                            <View style={styles.slide} title={<Text style={styles.textSlider} numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                                <Image resizeMode='stretch' style={styles.image} source={images.bar2} />
                            </View>
                            <View style={styles.slide} title={<Text style={styles.textSlider} numberOfLines={1}>Why Stone split from Garfield</Text>}>
                                <Image resizeMode='stretch' style={styles.image} source={images.bar3} />
                            </View>
                        </Swiper>
                    </View>
                    <Modal
                        visible={this.state.showAlert}
                        transparent={true}
                        animationType="fade"
                        onRequestClose={this.togglePrivacyAlertModal}
                    >
                        {this.renderPrivacyAlert()}
                    </Modal>
                    <View style={{ justifyContent: 'center',alignItems:'center',marginTop:hp(2)}}>
                        <SimpleButton bgColor={'#11A228'}
                                      onPress={this.togglePrivacyAlertModal}
                                      btnWidth={wp(45)}
                                      btnHeight={hp(6)}
                                      btnRadius={wp(1)}
                                      textColor={'#fff'}
                                      title={'Check-In'} />

                    </View>
                    <View style={styles.viewMainText}>
                        <View >
                            <View style={styles.viewLeftText}>
                                <Image style={styles.img} source={images.ic_distance}/>
                                <Text style={styles.textLink}>{'0.3 ml'}</Text>
                            </View>
                            <View style={styles.viewLeftText}>
                                <Image style={styles.img} source={images.ic_address}/>
                                <Text style={styles.textLink}>{'Mission Hills, los Angeles'}</Text>
                            </View>
                            <View style={styles.viewLeftText}>
                                <Image style={styles.img} source={images.ic_website}/>
                                <Text style={styles.textLink}>{'www.sample.com'}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.viewRightText}>
                                <Image style={styles.img} source={images.ic_phone}/>
                                <Text style={styles.textLink}>{'(213) 222-331234'}</Text>
                            </View>
                            <View style={styles.viewRightText}>
                                <Image style={styles.img} source={images.ic_time}/>
                                <Text style={styles.textLink}>{'3.00 PM - 2.00 AM'}</Text>
                            </View>
                            <View style={styles.viewRightText}>
                                <Image style={styles.img} source={images.ic_date}/>
                                <Text style={styles.textLink}>{'Opens Daily '}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        backgroundColor:'#f0f0f0',
    },
    container: {
        height:hp(30),
    },

    wrapper: {
    },

    slide: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    textSlider: {
        color: '#fff',
        fontSize:wp(4),
        fontWeight: 'bold',
        position: 'absolute',
        bottom:wp(11.5),
        left:wp(3),
        fontFamily:'System',
    },
    image: {
        height:hp(50),
        width:wp(100),
        resizeMode:'cover',
        backgroundColor:'rgba(52,52,52,.9)',
    },
    dot: {
        height:wp(3.3),
        width:wp(3.5),
        borderRadius:wp(10),
        backgroundColor: 'transparent',
        borderColor:'#fff',
        borderWidth:wp(0.5),
        marginLeft: wp(1),
        marginRight: wp(1),
        marginTop: hp(1),
        marginBottom: hp(1),

    },
    activeDot: {
        height:wp(3.3),
        width:wp(3.5),
        borderRadius:wp(10),
        backgroundColor: '#C02F3D',
        borderWidth:wp(0.5),
        borderColor:'#fff',
        marginLeft: wp(1),
        marginRight: wp(1),
        marginTop: hp(1),
        marginBottom: hp(1),
    },
    img: {
        height:hp(3),
        width:wp(3),
        resizeMode: 'contain',
    },
    textLink: {
        color: colors.primary_Content,
        fontSize:wp(3.2),
        fontWeight: 'bold',
        marginStart:wp(2),
        textAlign:'center',
        fontFamily:'System',
    },
    viewMainText:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:wp(85),
        alignItems:'center',
        marginStart:wp(8),
        marginVertical:hp(2.5),
    },
    viewLeftText:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:hp(0.5),
    },
    viewRightText:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:hp(0.5),
    },
    textTitle: {
        fontWeight:'bold',
        textAlign:'center',
    },
    text:{
        fontSize:wp(3.2),
        fontWeight:'bold'
    },
    modalContainer: {
        height:hp(39),
        width:wp(56),
        borderRadius:wp(3),
        backgroundColor: '#fff',
    },
    viewModalText:{
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(6),
        // backgroundColor:'green',
        borderTopLeftRadius: wp(3),
        borderTopRightRadius:wp(3),
    },
    viewRadioBtn:{
        height: hp(22),
        // backgroundColor:'orange',
        paddingTop:hp(1.2),
    },
    viewInnerRadioBtn:{
        flexDirection:'row',
        justifyContent: 'space-between',
        // backgroundColor:'red',
        width: '80%',
        paddingTop:hp(1.5),
    },
    viewModalBtnUpper:{
        height: hp(5.5),
        // backgroundColor:'purple',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth:wp(0.2),
        borderColor:'grey',
    },
    viewModalBtnBottom:{
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(5.5),
        // backgroundColor:'blue',
        borderBottomLeftRadius: wp(3),
        borderBottomRightRadius:wp(3),
        borderTopWidth:wp(0.2),
        borderColor:'grey',
    },
    textViewModalBtnUpper:{
        color:'#C02F3D',
        fontWeight:'bold',
    },
    textViewModalBtnBottom:{
        fontWeight:'bold',
    },


});
