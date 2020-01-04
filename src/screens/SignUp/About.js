import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../common/Header';
import images from "../../../assets/images";

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return(
            <View style={styles.mainContainer}>
                <Header bgColor={'#C42D3E'} onPress={() => this.props.navigation.goBack()} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow} textColor={'#fff'} title={'About the App'} />
                <View style={styles.imgView}>
                    <Image style={styles.img} source={images.logo} />
                    <View style={styles.textView}>
                        <Text style={styles.text}>Version 1.00 </Text>
                    </View>
                </View>

                <View style={styles.textDetailView}>
                    <Text style={styles.textDetail}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.
                    </Text>
                    <Text style={styles.textDetail}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.
                    </Text>
                    <Text style={styles.textDetail}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.
                    </Text>
                </View>

            </View>

        );
    }
}

const styles= StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: '#F0F0F0',
    },
    img: {
        height:hp(25),
        width:wp(100),
        resizeMode:'contain',
        // tintColor:'#fff',
    },
    text: {
        textAlign: 'center',
        // marginStart:wp(2),
        width: wp(34),
        paddingTop:hp(4),
        color:'#fff',
        fontFamily:'System',
    },
    textView: {
        justifyContent: "center",
        alignItems:'center',
    },
    textDetail: {
        textAlign: 'left',
        // marginStart:wp(2),
        width: wp(92),
        paddingBottom:hp(1.5),
        fontFamily:'System',
    },
    textDetailView: {
        justifyContent: "center",
        alignItems:'center',
        paddingTop:hp(3),
    },
    imgView: {
        justifyContent: "center",
        alignItems:'center',
        paddingTop: hp(2),
        backgroundColor: '#C42D3E',
        height: hp(42)
    },




});


