import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../common/Header';
import images from "../../../assets/images";

export default class Terms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return(
            <View style={styles.mainContainer}>
                <Header onPress={() => this.props.navigation.goBack()} bgColor={'#C42D3E'} textColor={'#fff'} imgLeftColor={'#fff'} imgLeft={images.ic_left_arrow}  title={'Terms'} />
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
        paddingTop:hp(2),
    },

});


