import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native';
import images from './../../assets/images';
import colors from './../../assets/Colors';
import Swiper from './../Component/swiper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default class OnBoarding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newIndex:1,
            currentIndex:1,

        }
        //this.props.navigation.openDrawer()
    }

    onIndexChanged(index){
        this.setState({ currentIndex: index});
    }

    scrollItem(){
        if (this.state.currentIndex === 2){
            this.props.navigation.navigate('Login');
            this.refs.swiper.scrollBy(1)
        } else {
            this.refs.swiper.scrollBy(1)
        }
    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{flex: 4}}>
                    <Swiper
                        loop={false}
                        showsButtons={false}
                        paginationStyle={styles.pagination}
                        dotStyle={styles.dotStyle}
                        activeDotStyle={styles.activeDotStyle}
                        activeDotColor={'#fff'}
                        ref='swiper'
                        onIndexChanged={this.onIndexChanged.bind(this)}
                    >
                        <View style={styles.backgroundImage2}>
                            <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}/>
                            <View style={{flex: 4, justifyContent: 'flex-end', alignItems: 'center',marginTop: hp('10%')}}>
                                <Image source={images.break_heart} resizeMode='contain' style={{
                                    width: wp('35%'),
                                    height: hp('35%')
                                }}/>
                            </View>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{
                                    // fontFamily: 'americorps',
                                    color: colors.black,
                                    fontSize: wp('7%'),
                                    marginBottom: 10
                                }}>Onboarding Message</Text>
                            </View>
                        </View>
                        <View style={styles.backgroundImage2}>
                            <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}/>
                            <View style={{flex: 4, justifyContent: 'flex-end', alignItems: 'center',marginTop: hp('10%')}}>
                                <Image source={images.break_heart} resizeMode='contain' style={{
                                    width: wp('35%'),
                                    height: hp('35%')
                                }}/>
                            </View>
                            <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{
                                    // fontFamily: 'americorps',
                                    color: colors.black,
                                    fontSize: wp('7%'),
                                    marginBottom: 10
                                }}>Onboarding Message</Text>
                            </View>
                        </View><View style={styles.backgroundImage2}>
                        <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}/>
                        <View style={{flex: 4, justifyContent: 'flex-end', alignItems: 'center',marginTop: hp('10%')}}>
                            <Image source={images.break_heart} resizeMode='contain' style={{
                                width: wp('35%'),
                                height: hp('35%')
                            }}/>
                        </View>
                        <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{
                                // fontFamily: 'americorps',
                                color: colors.black,
                                fontSize: wp('7%'),
                                marginBottom: 10
                            }}>Onboarding Message</Text>
                        </View>
                    </View>
                    </Swiper>
                </View>


                <View style={{flex: 1, alignItems: 'center'}}>

                    <TouchableOpacity style={styles.addButton} onPress={() => this.scrollItem()}>
                        <Text style={{color: colors.white, fontSize: wp('5%')}}>NEXT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:wp('70%'), height:hp('7%'), alignItems:'center'}}
                                      onPress={() =>  this.props.navigation.navigate('HomeStack')}>
                        <Text style={{color: colors.black, fontSize: wp('4%'), textDecorationLine: 'underline'}}>SKIP</Text>
                    </TouchableOpacity>

                </View>
            </View>

        );


    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('70%'),
        height: hp('7%'),
        borderRadius: 5,
        marginTop: 10,
        backgroundColor: colors.blue,
        marginBottom: 10,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage2: {
        flex: 1,
    },
    dotStyle: {
        width: wp('4%'),
        height: wp('4%'),
        borderRadius: wp('2%'),
        backgroundColor: colors.white,
        borderWidth: 1
    },
    activeDotStyle: {
        width: wp('4%'),
        height: wp('4%'),
        borderRadius: wp('2%'),
        backgroundColor: colors.gray
    },
});
