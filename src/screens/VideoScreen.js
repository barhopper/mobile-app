import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from "../common/Header";
import images from "../../assets/images";


export default class VideoScreen extends React.Component {


    render() {
        return(
            <View style={styles.mainContainer}>
                <Header bgColor={'#C02F3D'}
                        imgLeftColor={'#fff'}
                        imgLeft={images.ic_left_arrow}
                        textColor={'#fff'}
                        title={'Video - OKeefe Bar & Grill '}
                        onPress={() => this.props.navigation.goBack()}

                />



                <Text>Video Screen</Text>


            </View>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        // backgroundColor:'grey',
        alignItems:'center'

    },


});


