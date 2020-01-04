import React from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import Header from "../common/Header";
import PlaceComponent from "../common/PlaceComponent";
import InputComponent from "../common/InputComponent";
import SimpleButton from "../common/SimpleButton";
import FollowingComponent from "../common/FollowingComponent";

export default class Following extends React.Component {
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
            ],

        }
    }

    _renderItem = item => {
        return (
            <FollowingComponent
                img={item.img}
                title={item.title}
                distance={item.distance}
                description={item.description}
                onPress={() => this.props.navigation.navigate('')}
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
                        title={'Following'}
                        onPress={() => this.props.navigation.goBack()}

                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.flatView}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        data={this.state.items}
                        renderItem={({item})=> this._renderItem(item)}
                    />
                    </View>
                </ScrollView>
                <View style={styles.btnViewBottom}>
                    <SimpleButton onPress={() => this.props.navigation.navigate('VideoScreen')} btnHeight={hp(5.5)} btnWidth={wp(40)} btnRadius={wp(0.5)} bgColor={'#C02F3D'} textColor={'#fff'} title={'View Promotions'}/>
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
        marginTop:hp(1.5),
    },
    btnViewBottom:{
        position:'absolute',
        left:wp(0),
        right:wp(0),
        bottom:wp(6),
        justifyContent:'center',
        alignItems:'center',
    },
});
