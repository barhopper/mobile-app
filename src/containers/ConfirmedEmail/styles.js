import { StyleSheet, Dimensions } from 'react-native'; Dimensions
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import RF from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const COLOR = {
    BLACK: "#000",
    GRAY: "#9A9A9A",
    WHITE: "#FFF",
    Topbackcolor: '#a13745',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',

    },

    view1: {
        height: 1.7,
        width: '65%',
        backgroundColor: '#a13745'
    },

    view2: {
        height: 1.7,
        width: '65%',
        backgroundColor: '#a13745'
    },

    view3: {
        backgroundColor: '#fff', 
        width: wp('70%'), 
        height: hp('6%'),
        alignSelf: 'center',
        flexDirection:'row',
        borderRadius: 3, 
        marginTop: 20,
        paddingHorizontal:10
    },

    view4: {
        flexDirection: 'row',
        marginLeft: '22%',
        marginTop: 17
    },
    view5: {
        backgroundColor: '#fff', 
        width: wp('70%'), 
        height: hp('6%'),
        alignSelf: 'center', 
        borderRadius: 3, 
        marginTop: 15,
        flexDirection:'row',
        paddingHorizontal:10
    },
    view6: {
        flexDirection: 'row',
        marginLeft: '22%',
        marginTop: 5
    },
    view7:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    image1: {
        width: 22,
        height: 15,
        marginLeft: 10,
        marginTop: 5,
        tintColor: '#fff',
        marginBottom: 10
    },

    image3: {
        height: hp('2%'),
        width: wp('4%'),
    },

    text1: {
        color: '#fff',
        marginLeft: '25%',
        fontSize: 16,
        fontWeight:'bold'
    },
    text2: {
        color: '#fff',
        fontSize: RF(1.6),
        marginLeft: 10
    },

    textinput1: {
        color: '#000',
        marginLeft: 10,
        fontSize: 12
    },
    next:{
        width: width /2 + 20, 
        height: 45, 
        marginTop: 20,
        backgroundColor: '#c42d3e', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
   
    },





});   