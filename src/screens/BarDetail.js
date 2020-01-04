import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import Header from "../common/Header";
import SimpleButton from "../common/SimpleButton";
import Swiper from "../Component/swiper";
import colors from "../../assets/Colors";
import {color} from "react-native-reanimated";
import Button from "../common/Button";


export default class BarDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            uberURL: 'uber://?client_id=eJCfG86Rz&action=setPickup',
            isUberInstalled: false
        };
    }

    render() {

        return (
            <View style={styles.viewStyle}>
                <Header bgColor={'#C02F3D'}
                        imgLeftColor={'#fff'}
                        imgLeft={images.ic_left_arrow}
                        textColor={'#fff'}
                        title={'Barhopper'}
                        onPress={() => this.props.navigation.goBack()}
                />
                <ScrollView showsVerticalScrollIndicator={false}>

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
                <View style={{flexDirection:'row', justifyContent: 'center',alignItems:'center',marginTop:hp(2)}}>
                    <SimpleButton bgColor={'#11A228'}
                                  btnWidth={wp(45)}
                                  btnHeight={hp(6)}
                                  btnRadius={wp(1)}
                                  textColor={'#fff'}
                                  title={'Check-In'} />
                    <SimpleButton bgColor={'#C02F3D'}
                                  btnMarginStart={wp(3)}
                                  btnWidth={wp(45)}
                                  btnHeight={hp(6)}
                                  btnRadius={wp(1)}
                                  textColor={'#fff'}
                                  onPress={() =>this.props.navigation.navigate('RateBar')}
                                  title={'Check-Out'} />
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
                            <Image style={{height:hp(2.5),width:wp(2.5),resizeMode:'contain'}} source={images.ic_phone}/>
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
                <View>
                    <Button  bgColor={'#000'}
                                      imgLeft={images.ic_uber}
                                      iconMarginRight={wp(2)}
                                      btnWidth={wp(45)}
                                      btnHeight={hp(6)}
                                      btnRadius={wp(1)}
                                      textColor={'#fff'}
                             onPress={() => {Linking.canOpenURL(this.state.uberURL).then(isUberInstalled => {
                                 this.setState({ isUberInstalled: isUberInstalled });
                             });}}
                                      title={'Uber'} />

                </View>
                <View style={styles.viewCheckIn}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:hp(1)}}>
                     <Text>
                         <Text style={styles.textRed}>{'76 '}</Text>
                         <Text style={styles.text}>{'Female Checked In'}</Text>
                         <Text style={styles.textRed}>{' 15 '}</Text>
                         <Text style={styles.text}>{'Single'}</Text>
                     </Text>
                     <Text style={styles.text}>{'Resets In'}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',}}>
                        <Text>
                            <Text style={styles.textRed}>{'85 '}</Text>
                            <Text style={styles.text}>{'Male Checked In'}</Text>
                            <Text style={styles.textRed}>{' 10 '}</Text>
                            <Text style={styles.text}>{'Single'}</Text>
                        </Text>
                        <Text style={styles.text}>{'12:00:00'}</Text>
                    </View>

                </View>
                <View style={styles.viewRating}>
                    <Text style={{marginBottom:hp(1)}}>
                        <Text style={styles.text}>{'Bartender: '}</Text>
                        <Text style={styles.textRed}>{'6.5'}</Text>
                    </Text>
                    <Text style={{marginBottom:hp(1)}}>
                        <Text style={styles.text}>{'Bartender Friendliness: '}</Text>
                        <Text style={styles.textRed}>{'8.9'}</Text>
                    </Text>
                    <Text style={{marginBottom:hp(1)}}>
                        <Text style={styles.text}>{'Clean: '}</Text>
                        <Text style={styles.textRed}>{'6.5'}</Text>
                    </Text>
                    <Text style={{marginBottom:hp(1)}}>
                        <Text style={styles.text}>{'Affordability: '}</Text>
                        <Text style={styles.textRed}>{'3.3'}</Text>
                    </Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.text}>{'OVERALL:  '}</Text>
                        <Image style={styles.img} source={images.ic_stars} />
                        <Image style={styles.img} source={images.ic_stars} />
                        <Image style={styles.img} source={images.ic_stars} />
                    </View>
                </View>
                    <View style={{marginHorizontal:wp(3),paddingTop:hp(1)}}>
                    <Text style={{fontWeight:'bold',fontSize:wp(3.2)}}>Club Activities</Text>
                    </View>
                    <View style={{marginTop:hp(1.5),height:hp(8),width:wp(94),backgroundColor:'#fff',marginHorizontal:wp(3),paddingTop:hp(1.5),paddingLeft: wp(2)}}>
                        <Text style={styles.text}>{'Barhoppers Choice, Entertainment, Atmosphere, Services, Sports'}</Text>
                    </View>
                    <View style={{marginTop:hp(3)}}>
                        <Button  bgColor={'#C42D3E'}
                                 imgLeft={images.ic_play}
                                 iconMarginRight={wp(2)}
                                 btnWidth={wp(45)}
                                 btnHeight={hp(6)}
                                 btnRadius={wp(1)}
                                 textColor={'#fff'}
                                 onPress={() =>this.props.navigation.navigate('VideoScreen')}
                                 title={'Video'} />

                    </View>
                    <View style={{marginHorizontal:wp(3)}}>
                        <Text style={{fontWeight:'bold',fontSize:wp(3.2)}}>{'Announcements'}</Text>
                    </View>
                    <View style={styles.viewAnnouncement}>
                        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                            <View style={{width:wp(20),paddingVertical:hp(1.5)}}>
                                <Image style={styles.imgBottom} source={images.bar}/>
                            </View>
                            <View style={{width:wp(39),paddingTop:wp(2)}}>
                                <Text style={{fontSize:wp(3.2),color:'#000',fontWeight:'bold',}}>{'O keefe bar & grill'}</Text>
                                <Text style={{fontSize:wp(3),paddingVertical:wp(0.5),color:'#000',width:wp(60)}}>{'Yesterday'}</Text>
                                <View style={styles.lineViewUpper}/>
                            </View>
                            <View style={{width:wp(35),alignItems:'flex-end',paddingRight:wp(5),paddingTop:hp(1)}}>
                                <Text>{'123'}</Text>

                            </View>
                        </View>
                          <Text>{'We are closed tomorrow for maintenance, Please be guided accordingly.'}</Text>
                          <View style={styles.lineViewBottom}/>
                          <View>
                              <View style={{flexDirection:'row',justifyContent: 'space-between',marginHorizontal:wp(14),marginBottom:hp(7)}}>
                                  <TouchableOpacity style={{flexDirection:'row',}}>
                                      <Image style={styles.img} source={images.ic_follow}/>
                                      <Text style={styles.textBottomLink}>Follow</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{flexDirection:'row'}}>
                                      <Image style={styles.img} source={images.ic_comment}/>
                                      <Text style={styles.textBottomLink}>Comment</Text>
                                  </TouchableOpacity>
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
        // backgroundColor: "rgba(0,0,0,0.75)",
    },

    wrapper: {
    },

    slide: {
        justifyContent: 'center',
        // backgroundColor: 'transparent',
    },

    slide1: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#9DD6EB'
    },

    slide2: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#97CAE5'
    },

    slide3: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#92BBD9'
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
    lineViewUpper: {
        height:hp(0.3),
        width:wp(5),
        backgroundColor:'#C02F3D',
        marginTop: hp(0.5),
    },
    lineViewBottom: {
        height:hp(0.3),
        width:wp(90),
        backgroundColor:'#C02F3D',
        marginVertical: hp(1.2)
    },
    viewMainText:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width:wp(85),
        alignItems:'center',
        marginStart:wp(8),
        marginVertical:hp(2.5),
        fontFamily:'System',
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
        fontFamily:'System',
    },
    imgBottom: {
        height:hp(8),
        width:wp(15),
        resizeMode: 'cover',
    },
    text:{
        fontSize:wp(3),
        color:colors.primary_Content,
        fontWeight:'bold',
        fontFamily:'System',
    },
    textRed:{
        fontSize:wp(3),
        color:colors.secondary_Highlight,
        fontWeight:'bold',
        fontFamily:'System',
    },
    viewCheckIn: {
        height:hp(9),
        backgroundColor:'#fff',
        marginHorizontal:wp(3),
        marginTop:hp(1),
        paddingTop:hp(1.5),
        paddingHorizontal:wp(3),
    },
    viewRating: {
        marginTop:hp(1.5),
        height:hp(20),
        backgroundColor:'#fff',
        marginHorizontal:wp(3),
        padding:wp(2),
    },
    viewAnnouncement:{
        marginTop:hp(1.5),
        height:hp(24),
        width:wp(94),
        backgroundColor:'#fff',
        marginHorizontal:wp(3),
        padding:wp(2),
        marginBottom:hp(2)
    },
    textBottomLink:{
        fontSize:wp(3.2),
        color:colors.primary_Content,
        // fontWeight:'bold',
        fontFamily:'System',
        paddingLeft:wp(2),
    }


});
