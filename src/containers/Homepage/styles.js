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
        // backgroundColor: '#f2f2f2',

    },
    textinput1: {
        color: '#000',
        fontSize: 12,

    },
    text1: {
        fontSize: RF(1.9),
        color: '#999999',
        textAlign:"justify",
       
    },
    text2: {
        fontSize: RF(2.3),
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 10,
        color: '#000'
    },
    view1: {
        flexDirection: 'row',
        width: width - 20, height: 45,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 3
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    view3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fdfdfd',
        width: width / 1.07,
        marginTop: 10,
        borderColor: '#000',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        paddingRight:10,
        paddingVertical:0
    },
    view5: {
        width: 1,
        height: 20,
        backgroundColor: '#999999',
        marginRight: 15
    },
    view6: {
        height: 1.2,
        width: 20,
        backgroundColor: '#c42d3e',
        marginLeft: 10,
        marginTop: 5,
        
    },
    touchable1: {
        width: wp('25%'), height: hp('5%'),
        backgroundColor: '#c42d3e',
        justifyContent: 'center',
        marginLeft: 10,
        borderRadius: 3
    },
    touchable2: {
        width: wp('18%'), height: hp('5%'),
        backgroundColor: '#c42d3e',
        justifyContent: 'space-between',
        marginLeft: 5,
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8
    },
    touchable3: {
        width: wp('13%'), height: hp('5%'),
        backgroundColor: '#c42d3e',
        justifyContent: 'space-between',
        marginLeft: 5,
        borderRadius: 3,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8
    },
    image1: {
        height: 12,
        width: 12,
        marginTop: 3
    },
    image2: {
        height: hp("18%"),
        width: wp("29%"),
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    }

});   