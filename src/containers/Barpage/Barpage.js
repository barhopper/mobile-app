import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, FlatList
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import { Card } from 'native-base';
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SwiperFlatList from 'react-native-swiper-flatlist';
import StarRating from 'react-native-star-rating';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


class Barpage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: '',
            starCount: null
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    render() {
        return (
            <View style={styles.container}>

                <AppHeader
                    headerTitle={"O'Keefe's Bar & Grill"}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}

                />
                <ScrollView>
                    <View style={{}}>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'white'
                        }}>
                            <SwiperFlatList
                                autoplay
                                autoplayDelay={2}
                                autoplayLoop
                                index={2}
                                showPagination
                                paginationStyleItem={{ height: 8, width: 8 }}
                                paginationActiveColor="#c42d3e"
                                paginationStyle={{ height: 15, width: width - 20, marginLeft: 30 }}
                            >
                                <View style={[styles.child, { backgroundColor: 'tomato' }]}>
                                    <ImageBackground source={require('./../../components/Images/image-2.png')}
                                        style={styles.child}>
                                        <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
                                            <Text style={{ color: '#fff', fontSize: RF(2.4), fontWeight: 'bold' }}>O'Keefe's Bar & Grill</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={[styles.child, { backgroundColor: 'thistle' }]}>
                                    <ImageBackground source={require('./../../components/Images/image-2.png')}
                                        style={styles.child}>
                                        <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
                                            <Text style={{ color: '#fff', fontSize: RF(2.4), fontWeight: 'bold' }}>O'Keefe's Bar & Grill</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={[styles.child, { backgroundColor: 'skyblue' }]}>
                                    <ImageBackground source={require('./../../components/Images/image-2.png')}
                                        style={styles.child}>
                                        <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
                                            <Text style={{ color: '#fff', fontSize: RF(2.4), fontWeight: 'bold' }}>O'Keefe's Bar & Grill</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                                <View style={[styles.child, { backgroundColor: 'teal' }]}>
                                    <ImageBackground source={require('./../../components/Images/image-2.png')}
                                        style={styles.child}>
                                        <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
                                            <Text style={{ color: '#fff', fontSize: RF(2.4), fontWeight: 'bold' }}>O'Keefe's Bar & Grill</Text>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </SwiperFlatList>
                        </View>
                        <View style={styles.view4}>
                            <TouchableOpacity style={styles.touchable1}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Check-In</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => Actions.Feedback()}
                                style={styles.touchable2}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Check-Out</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view5}>
                            <View style={{ width: '45%', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/send.png')} />
                                    <Text style={styles.text2}>0.3 mi</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/location-2.png')} />
                                    <Text style={styles.text2}>Mission Hills,Los Angeles</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/website.png')} />
                                    <Text style={styles.text2}>www.sample.com</Text>
                                </View>
                            </View>
                            <View style={{ width: '45%', }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 23 }}
                                        source={require('../../components/Images/mobile-2.png')} />
                                    <Text style={styles.text2}>(213) 222-331234</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/time.png')} />
                                    <Text style={styles.text2}>3:00 PM - 2:00 AM</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Image resizeMode="contain" style={{ height: 20, width: 20 }}
                                        source={require('../../components/Images/calander-2.png')} />
                                    <Text style={styles.text2}>Opens Daily</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity>
                                <Image resizeMode="contain" style={{
                                    width: width - 40,
                                    height: (width * 0.11),
                                }}
                                    source={require('../../components/Images/uber.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view1}>
                            <View style={styles.view6}>
                                <Text style={styles.text1}>Females Checked in: <Text style={{ color: '#c42d3e', fontSize: RF(2.2), }}>76</Text></Text>
                                <Text style={styles.text1}>Resets In</Text>
                            </View>
                            <View style={styles.view7}>
                                <Text style={styles.text1}>Males Checked in: <Text style={{ color: '#c42d3e', fontSize: RF(2.2), }}>85</Text></Text>
                                <Text style={styles.text1}>12:00:00</Text>
                            </View>
                        </View>
                        <View style={styles.view8}>
                            <Text style={styles.text4}>Bartenders Looks: <Text style={styles.text6}>6.5</Text></Text>
                            <Text style={styles.text5}>Bartenders Friendliness: <Text style={styles.text6}>8.9</Text></Text>
                            <Text style={styles.text5}>Cleanliness: <Text style={styles.text6}>6.5</Text></Text>
                            <Text style={styles.text5}>Affordability: <Text style={styles.text6}>3.3</Text></Text>
                            <View style={{ flexDirection: 'row' }}>
                                <View>
                                    <Text style={styles.text5}>Affordability: </Text>
                                </View>
                                <View style={{ marginTop: 8, marginLeft: 5,width:width/3 -20 }}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        starSize={18}
                                        interitemSpacing={3}
                                        fullStarColor={'#fba721'}
                                        rating={this.state.starCount}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>Club Activities</Text>
                        </View>
                        <View style={styles.view2}>
                            <Text style={styles.text1}>
                                Barhoppers Choice, Entertainment, Atmosphere, Services, Sports
                                </Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <TouchableOpacity
                                onPress={() => Actions.Pausevideo()}
                                style={styles.touchable3}>
                                <Image style={{ height: 20, width: 20 }}
                                    source={require('../../components/Images/play.png')} />
                                <Text style={styles.text3}>Video</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingHorizontal: 10, marginTop: 15 }}>
                            <Text style={{ fontWeight: 'bold' }}>Announcements</Text>
                        </View>
                        <View style={styles.view3}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={{ height: (width * 0.13), width: 50, }}
                                        source={require('../../components/Images/image8.png')} />
                                    <View style={{ flexDirection: 'column', marginLeft: 10, }}>
                                        <Text style={{
                                            fontWeight: 'bold',
                                            color: '#000'
                                        }}>
                                            O'Keefe's Bar & Grill
                                        </Text>
                                        <Text style={{ color: '#000', fontStyle: 'italic' }}>Yesterday</Text>
                                        <View style={{
                                            height: 1.2,
                                            width: 20,
                                            backgroundColor: '#c42d3e',
                                            marginTop: 5
                                        }} />
                                    </View>
                                </View>
                                <View style={{}}>
                                    <Text style={{ color: '#000' }}>8.00 PM</Text>
                                </View>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text style={{ fontSize: RF(2), color: '#000' }}>We are closed tomorrow for maintainence. Please be guided accordingly. </Text>
                            </View>
                            <View style={{
                                height: 1.2,
                                width: '100%',
                                backgroundColor: '#c42d3e',
                                marginTop: 10
                            }} />
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                marginTop: 10
                            }}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ height: 20, width: 20 }}
                                            source={require('../../components/Images/follow.png')} />
                                        <Text style={{ marginLeft: 10 }}>Follow</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image style={{ height: 20, width: 25 }}
                                            source={require('../../components/Images/comment.png')} />
                                        <Text style={{ marginLeft: 10 }}>Comment</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 20 }} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}


export default Barpage;
