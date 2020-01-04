import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Dimensions,
    Platform
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import Header from "../common/Header";
import PlaceComponent from "../common/PlaceComponent";
import InputComponent from "../common/InputComponent";
import HomeHeader from "../common/HomeHeader";
import SimpleButton from "../common/SimpleButton";
import MapView, {PROVIDER_GOOGLE, PROVIDER_DEFAULT} from 'react-native-maps';
import config from "../../assets/Config";
import MapButton from "../common/MapButton";
const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 37.7699936;
const LONGITUDE = -122.4492177;
const LATITUDE_DELTA = 0.0322;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = config.MAP_API_KEY;

export default class MapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 1,
            coordinates: [
                {
                    latitude:37.7699936,
                    longitude: -122.4492177,
                    image: images.avatar
                },
                {
                    latitude: 37.7761611,
                    longitude: -122.4465123,
                    image: images.ic_map_pin_2
                },
                {
                    latitude: 37.7819611,
                    longitude: -122.4495123,
                    image: images.ic_map_pin_1
                },
                {
                    latitude: 37.7641611,
                    longitude: -122.4492177,
                    image: images.ic_map_pin_6
                },
                {
                    latitude: 37.7599611,
                    longitude: -122.4422177,
                    image: images.ic_map_pin_1
                },
                {
                    latitude: 37.7680611,
                    longitude: -122.4555180,
                    image: images.ic_map_pin_5
                },
                {
                    latitude: 37.7721411,
                    longitude: -122.4525123,
                    image: images.ic_map_pin_3
                },
                {
                    latitude: 37.7711411,
                    longitude: -122.4415123,
                    image: images.ic_map_pin_4
                },
                {
                    latitude: 37.7630611,
                    longitude: -122.4595180,
                    image: images.ic_map_pin_1
                },

            ],
        };
        // this.onNotification();
        // this.mapView = null;
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
            <View style={styles.viewStyle}>
                <HomeHeader  bgColor={'#C02F3D'}
                        // imgLeftColor={'#fff'}
                        // imgLeft={images.ic_eye}
                        textColor={'#fff'}
                        title={'Barhopper'}
                        textLink={'List View'}
                             onPressText={() =>this.props.navigation.navigate('HomeScreen')}
                />
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
                            <View><Image source={coordinate.image} style={{width: 30, height: 30}}
                                         resizeMode={'contain'}/></View>
                        </MapView.Marker>
                    )}

                </MapView>
                <View style={styles.btnViewBottom}>
                    <SimpleButton onPress={() => this.props.navigation.navigate('HomeScreen')} bgColor={'#C02F3D'} btnHeight={hp(6)} btnWidth={wp(40)} btnRadius={wp(0.5)} textColor={'#fff'} title={'Promotions'}/>
                </View>
                <View style={styles.mapBtn}>
                    <MapButton/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        backgroundColor:'#f0f0f0'
    },
    btnViewBottom:{
        position:'absolute',
        left:wp(0),
        right:wp(9),
        bottom:wp(6),
        justifyContent:'center',
        alignItems:'flex-end',
    },
    mapBtn:{
        position:'absolute',
        left:wp(17),
        right:wp(0),
        bottom:wp(9),
        // justifyContent:'center',
        // alignItems:'flex-end',
        height:'100%',
        width:'100%',
    }

});
