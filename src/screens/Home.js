import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    Image,
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Platform, SafeAreaView, ImageBackground
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
import { withInAppNotification } from 'react-native-in-app-notification';
import firebase from 'react-native-firebase';
import images from '../../assets/images';
import colors from '../../assets/Colors';
import config from '../../assets/Config';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.7699936;
const LONGITUDE = -122.4492177;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = config.MAP_API_KEY;
const IOS = Platform.OS === 'ios';
const ANDROID = Platform.OS === 'android';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

class Home extends Component {

    static navigationOptions = ({navigation}) => ({

        drawerLabel: 'Home',
        drawerIcon: ({tintColor}) => (
            <Image
                source={images.home}
                style={[{width: 20, height: 20}, {tintColor: tintColor}]}
                resizeMode={'contain'}
            />
        ),
    });

    onNotification = () => {
        firebase.notifications().onNotification((notification: Notification) => {
            console.log('Notification---<<', notification);
            console.log('Notification-props---<<', this.props);
            this.props.showNotification({
                title: notification._title,
                message: notification._body,
                icon: require('./../../assets/images/logo.png'),
                onPress: () => {
                    console.log('Notifications onPressed');
                }
            });
        });
    };

    constructor(props) {
        super(props);

        // AirBnB's Office, and Apple Park
        this.state = {
            sliderValue: 1,
            coordinates: [
                {
                    latitude:37.7699936,
                    longitude: -122.4492177,
                    image: images.blue_pin
                },
                {
                    latitude: 37.7741611,
                    longitude: -122.4466123,
                    image: images.orange_pin
                },
                {
                    latitude: 37.7641611,
                    longitude: -122.4492177,
                    image: images.orange_pin
                },
                {
                    latitude: 37.7741611,
                    longitude: -122.4566123,
                    image: images.orange_pin
                },

            ],
        };

        this.onNotification();
        this.mapView = null;
    }

    onMapPress = (e) => {
        this.setState({
            coordinates: [
                ...this.state.coordinates,
                e.nativeEvent.coordinate,
            ],
        });
    };

    render() {
        const nav = this.props.navigation;
        return (

            <View style={{flex: 1}}>
                <View source={images.bg_image} style={{
                    height: hp('10%'),
                    width: '100%',
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor: colors.blue
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center',marginTop:Platform.OS==='ios'?0:0}}>
                        <View style={{flex: 1,marginLeft:wp('2%')}}>
                            <TouchableOpacity onPress={()=>nav.openDrawer()}>
                                <Image
                                    style={{width:wp(config.h_m_b_w),height:hp(config.h_m_b_h)}}
                                    source={images.menu}
                                    resizeMode='contain'
                                /></TouchableOpacity>
                        </View>
                        <View style={{flex: 1,alignItems:'center'}}><Text style={{color:colors.white,fontSize:wp(config.h_t_f_s)}}>Map</Text></View>
                        <View style={{flex: 1}} />

                    </View>
                </View>
                <View style={{flex: 4, backgroundColor: colors.white}}>
                    <MapView
                        // provider={useGoogleMaps ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }}
                        style={{height: hp('90%')}}
                        ref={c => this.mapView = c}
                        onPress={this.onMapPress}
                    >

                        {this.state.coordinates.map((coordinate, index) =>
                            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate}>
                                <View><Image source={coordinate.image} style={{width: 20, height: 20}}
                                             resizeMode={'contain'}/></View>
                            </MapView.Marker>
                        )}

                    </MapView>
                </View>

                <View style={{flex: 1, flexDirection: 'column',width:wp('90%'),alignSelf:"center",backgroundColor:'white',justifyContent:'center'}}>

                    <View style={{flex: 0.5, flexDirection: 'row',height:hp('1%')}}>

                        <View style={{flex: 1.5, flexDirection: 'column', alignItems: 'center',justifyContent:'center'}}>
                            <Text style={{fontSize: wp('2.5%'),color:colors.black}}> TOTAL MILES</Text>
                            <Text style={{fontSize: wp('5%'),fontWeight:'bold',color:colors.assignment_yellow}}> 45 miles</Text>
                        </View>
                        <View style={{flex: 1.5, flexDirection: 'column', alignItems: 'center',backgroundColor:'white',justifyContent:'center'}}>
                            <Text style={{fontSize: wp('2.5%'),color:colors.black}}> TODAY EARNINGS</Text>
                            <Text style={{fontSize: wp('5%'),fontWeight:'bold',color:colors.assignment_yellow}}>5 Order</Text>
                        </View>
                    </View>
                    <View style={{flex: 0.5, flexDirection: 'row'}}>

                        <View style={{flex: 1.5, flexDirection: 'column', alignItems: 'center',justifyContent:'center'}}>
                            <Text style={{fontSize: wp('2.5%'),color:colors.black}}> TODAYS'S EARNINGS</Text>
                            <Text style={{fontSize: wp('5%'),fontWeight:'bold',color:colors.assignment_yellow}}>$153.34</Text>
                        </View>
                        <View style={{flex: 1.5, flexDirection: 'column', alignItems: 'center',backgroundColor:'white',justifyContent:'center'}}>
                            <Text style={{fontSize: wp('2.5%'),color:colors.black}}> CASH PAYMENTS</Text>
                            <Text style={{fontSize: wp('5%'),fontWeight:'bold',color:colors.assignment_yellow}}>$250.25</Text>
                        </View>
                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
        //
    });

export default withInAppNotification(Home);
