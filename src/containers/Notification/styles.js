import { StyleSheet, Dimensions } from 'react-native';
 Dimensions
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
    view1:{
        flexDirection: 'row',
        width: width - 20, height: 45,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignSelf: 'center', 
        marginTop: 20,
        borderRadius: 3
    },
    view2:{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    view3:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
    text1:{
        color: '#000', 
        fontWeight: 'bold', 
        fontSize: RF(2)
    },
    text2:{
        color: '#a13745', 
        fontStyle: 'italic', 
        fontSize: RF(2),
        marginTop:5
    }

  





});   