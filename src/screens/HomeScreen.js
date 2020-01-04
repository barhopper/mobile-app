import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import PlaceComponent from "../common/PlaceComponent";
import InputComponent from "../common/InputComponent";
import SimpleButton from "../common/SimpleButton";
import HomeHeader from "../common/HomeHeader";
import IconButton from "../common/IconButton";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title:'OKEEFS BAR & GRILL',
                    distance:'0.3 ml',
                    description: 'Lively sports bar doing out pub grub & plenty of booze in TV equipped surroundings.',
                    img:images.bar,

                },
                {
                    id: 1,
                    title:'200 FIFTH',
                    distance:'2.2 ml',
                    description: 'Longtime Park Slope sports bar that draws a crowd with beer & televised sports.',
                    img:images.bar,
                },
                {
                    id: 2,
                    title:'Centerpieces',
                    distance:'3.5 ml',
                    description: 'Lively sports bar doing out pub grub & plenty of booze in TV equipped surroundings.',
                    img:images.bar,
                },
                {
                    id: 3,
                    title:'200 FIFTH',
                    distance:'5 ml',
                    description: 'Longtime Park Slope sports bar that draws a crowd with beer & televised sports.',
                    img:images.bar,
                },

            ],

        }
    }

    _renderItem = item => {
        return (
            <PlaceComponent
                img={item.img}
                title={item.title}
                distance={item.distance}
                description={item.description}
                onPress={() => this.props.navigation.navigate('BarDetail')}
            />
        );
    };


    render() {
        return (
            <View style={styles.viewStyle}>
                <HomeHeader bgColor={'#C02F3D'}
                            imgLeftColor={'#fff'}
                            imgLeft={images.ic_eye}
                            textColor={'#fff'}
                            title={'Barhopper'}
                            imgRightColor={'#fff'}
                            onPressRightFirst={() => this.props.navigation.navigate('Following')}
                            imgRightFirst={images.ic_star_header}
                            onPressRightMiddle={() => this.props.navigation.navigate('Notification')}
                            imgRightMiddle={images.ic_notification2}
                            onPressRightLast={() => this.props.navigation.navigate('Setting')}
                            imgRightLast={images.ic_settings}
                            textLink={'Map View'}
                            onPressText={() =>this.props.navigation.navigate('MapScreen')}
                />
                <View style={styles.viewInput}>
                 <InputComponent bgColor={'#fff'}
                                 InputWidth={wp(94)}
                                 InputHeight={wp(12)}
                                 imgLeftColor={'#d0d0d0'}
                                 imgLeft={images.ic_search}
                                 placeholder={'Search'}
                                 imgMiddleColor={'#d0d0d0'}
                                 imgMiddle={images.ic_lineVertical}
                                 imgRightColor={'#d0d0d0'}
                                 imgRight={images.ic_filter}
                                 onPress={() =>this.props.navigation.navigate('Search2')}
                 />
                </View>
                <View style={styles.btnViewTop}>
                    <IconButton bgColor={'#C42D3E'} btnHeight={hp(5)} btnWidth={wp(28)} btnMarginStart={wp(3)} fontSize={wp(3)} btnRadius={wp(1)} textColor={'#fff'} title={'Bar Near Me'}/>
                    <IconButton bgColor={'#C42D3E'} btnHeight={hp(5)} btnWidth={wp(20)} btnMarginStart={wp(3)} fontSize={wp(3)} btnRadius={wp(1)} textColor={'#fff'} title={'Music'} iconHeight={hp(1.7)} iconWidth={wp(3)} iconPaddingRight={wp(7)} imgRight={images.ic_tag_close} />
                    <IconButton bgColor={'#C42D3E'} btnHeight={hp(5)} btnWidth={wp(16)} btnMarginStart={wp(3)} fontSize={wp(3)} btnRadius={wp(1)} textColor={'#fff'} title={'Food'} iconHeight={hp(1.7)} iconWidth={wp(3)} iconPaddingRight={wp(7)} imgRight={images.ic_tag_close} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                       <View style={{paddingBottom:hp(13)}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            data={this.state.items}
                            renderItem={({item})=> this._renderItem(item)}
                        />
                       </View>
                </ScrollView>
                <View style={styles.btnViewBottom}>
                <SimpleButton onPress={() => this.props.navigation.navigate('PromotionFeed')} bgColor={'#C42D3E'} btnHeight={hp(5.5)} btnWidth={wp(40)} btnRadius={wp(0.5)} textColor={'#fff'} title={'Promotions'}/>
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
    textView: {
        margin:wp(3),
        color:'#C42D3E',
        fontSize:wp(4.5),
        fontWeight:'bold',
        fontFamily:'System',
    },
    viewUpperFlat: {
        height:hp(43),
    },
    viewBottomFlat: {
        height:hp(57),
        marginTop:hp(2),
    },
    btnViewBottom:{
        position:'absolute',
        left:wp(0),
        right:wp(0),
        bottom:wp(6),
        justifyContent:'center',
        alignItems:'center',
    },
    viewInput: {
        marginHorizontal:wp(3),
        marginVertical:hp(2),
    },
    btnViewTop:{
        flexDirection:'row',
    }
});
