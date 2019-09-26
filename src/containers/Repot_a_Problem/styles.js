import { StyleSheet,Dimensions} from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RF from 'react-native-responsive-fontsize';
export const COLOR = {
    DARK: "#040207",
    PANTOME: '#ff6f61',
    LIGHT: "#ffffff",
    BLACK: "#000",
    GRAY: "#9A9A9A",
    LIGHT_GRAY: "#ffffff",
    DANGER: "#FF5370",
    RED: "#800000",
    WHITE: "#FFF",
    CYAN: "#09818F",
    LIGHT_ORANGE: "#ff944d"
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',

    },

    view1:{
         height: (width / 2.11),
         width: width / 1.07,
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop:10,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        elevation: 5,
        padding: 2,
    },
    touchable1: {
        width: wp('50%'), height: 50,
        backgroundColor: '#c42d3e',
        borderRadius: 3,
        // position:'absolute',
        marginTop:width/1.6,
        alignSelf:'center',
        justifyContent:'center',
      
    },

    main1: {
        flex: 1,
        marginTop: 30,
        height: (width * 0.13),
        width: width / 1.07,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: { width: 0, height: 2, },
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        justifyContent:'center'

    },
    view4: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        width: width / 1.07,
        marginTop: 10,
        borderColor:'#000',
        padding:8
       
    },
    Touchable: {
        backgroundColor: '#E69151',
        height: (width * 0.13),
        width: wp('70%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
       
    },

    Touchable1: {
        backgroundColor: '#E69151',
        height: (width * 0.13),
        width: wp('70%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        marginTop: 10,
       
    },

    Touchable2: {
        backgroundColor: '#E69151',
        height: 40,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20
    },

    card1: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        minHeight: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowOpacity: 2.0,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        elevation: 5
    },


    scrollview: {
        backgroundColor: '#262626',
        height: '100%',
        width: '100%'
    },

    text1: {
        fontSize: RF(2.2),
        marginLeft:10,
        color: '#000',
        textAlign:'left'
    },
});