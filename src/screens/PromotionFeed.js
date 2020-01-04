import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import Header from "../common/Header";
import PlaceComponent from "../common/PlaceComponent";
import InputComponent from "../common/InputComponent";
import SimpleButton from "../common/SimpleButton";
import FollowingComponent from "../common/FollowingComponent";
import PromotionComponent from "../common/PromotionComponent";

export default class PromotionFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title:'OKEEFS BAR & GRILL',
                    subtitle:'0.3 ml',
                    text: 'Lively sports bar doing out pub grub & plenty of booze.',
                    img:images.bar,

                },
                {
                    id: 1,
                    title:'OKEEFS BAR & GRILL',
                    subtitle:'0.3 ml',
                    text: 'Lively sports bar doing out pub grub & plenty of booze.',
                    img:images.bar,

                },
            ],

        }
    }

    _renderItem = item => {
        return (
            <PromotionComponent
                img={item.img}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                onPress={() => this.props.navigation.navigate('PromoDetails')}
            />
        );
    };


    render() {
        return (
            <View style={styles.viewStyle}>
                <Header bgColor={'#C02F3D'}
                        imgLeftColor={'#fff'}
                        imgLeft={images.ic_left_arrow}
                        textColor={'#fff'}
                        title={'Promotion Feed'}
                        onPress={() => this.props.navigation.goBack()}
                />
                <View style={styles.viewInput}>
                    <InputComponent bgColor={'#fff'}
                                    InputWidth={wp(94)}
                                    InputHeight={wp(12)}
                                    imgLeftColor={'#d0d0d0'}
                                    imgLeft={images.ic_search}
                                    placeholder={'Search'}
                    />
                </View>
                    <View style={styles.flatView}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            data={this.state.items}
                            renderItem={({item})=> this._renderItem(item)}
                        />
                    </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        backgroundColor:'#f0f0f0',
    },
    flatView: {
        marginTop:hp(1),
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
        marginTop: hp(2)
    },
});
