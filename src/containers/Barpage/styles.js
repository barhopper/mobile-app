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
        backgroundColor: '#fff',

    },
    view1:{
        // height: (width * 0.20),
         width: width / 1.07,
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop:10,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        elevation: 5,
        padding: 15,
    },
    view2:{
        // height: (width * 0.20),
        width: width / 1.07,
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        // justifyContent:'center',
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        marginTop:10,
        elevation: 5,
        padding: 10,
    },
    view3:{
        width: width / 1.07,
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop:10,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        elevation: 5,
        padding: 15,
    },
    view4:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 10
    },
    view5:{
        width: width,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    view6:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    view7:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    view8:{
        width: width / 1.07,
        shadowOpacity: 2.0,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 10,
        shadowOffset: { width: 0, height: 3, },
        shadowColor: '#000000',
        elevation: 5,
        padding: 15,
    },
    touchable1:{
        width: width / 2 - 15,
        height: (width * 0.11),
        backgroundColor: '#119f29',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    touchable2:{
        width: width / 2 - 15,
        height: (width * 0.11),
        backgroundColor: '#c42d3e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    touchable3:{
        width: width / 2 +20 ,
        height: (width * 0.11),
        backgroundColor: '#c42d3e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        flexDirection:'row'
    },
    text1:{
        fontWeight: 'bold', 
        fontSize: RF(2.2), 
        color: '#000',
        lineHeight:20,
    },
    text2:{
        fontSize: RF(2.2), 
        marginLeft: 5,
        color:'#000'
    },
    text3:{
        color: '#fff', 
        fontSize: 14, 
        marginLeft: 10 
    },
    text4:{
        fontSize: RF(2.2), 
        color: '#000', 
        fontWeight: "bold" 
    },
    text5:{
        fontSize: RF(2.2), 
        color: '#000', 
        fontWeight: "bold", 
        marginTop: 10 
    },
    text6:{
        color: '#c42d3e', 
        fontSize: RF(2.2)
    },
    child:{
        height: height * 0.31,
        width,
        justifyContent: 'center'
    }







});   