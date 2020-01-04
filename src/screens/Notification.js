import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,Slider} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import SimpleButton from "../common/SimpleButton";
import Header from "../common/Header";

export default class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:0
        }
    }

    render() {
        return(
            <View style={styles.mainContainer}>
                <Header bgColor={'#C02F3D'}
                        imgLeftColor={'#fff'}
                        imgLeft={images.ic_left_arrow}
                        textColor={'#fff'}
                        title={'Notification'}
                        onPress={() => this.props.navigation.goBack()}

                />

                 <TouchableOpacity style={styles.container} onPress={() => this.props.navigation.navigate('CheckIn')}>
                     <View style={{flexDirection:'row',alignItems:'center'}}>
                         <Image style={styles.img} source={images.bar} />
                         <View style={styles.viewText}>
                         <Text style={styles.text}>You are near O'Keefe's Bar & Grill</Text>
                         <Text style={{color:'#C02F3D'}}>Tap to check-in</Text>
                         </View>
                     </View>
                     <View>

                     </View>
                     <View>
                         <Image style={styles.icon} source={images.ic_report} />
                     </View>

                 </TouchableOpacity>

                </View>

        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#f0f0f0',
    },
    container:{
        height:hp(11),
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:wp(3),
        marginHorizontal:wp(3),
        marginTop:hp(1.5)
    },
    viewText:{
        paddingLeft:wp(3.5),
        paddingBottom:hp(3.5)
    },
    img:{
        height:hp(9),
        width:wp(16),
        resizeMode:'cover',
    },
    icon: {
        height:hp(4.5),
        width:wp(4.5),
        resizeMode:'contain',
    },
    text:{
        fontSize:wp(3.2),
        fontWeight:'bold',
        color:'#000000',

    },

});


