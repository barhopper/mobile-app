import { StyleSheet, Dimensions } from 'react-native'; Dimensions
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export const COLOR = {
    BLACK: "#000",
    GRAY: "#9A9A9A",
    WHITE: "#FFF",
    Topbackcolor: '#a13745',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        //  backgroundColor: '#000',

    },

    view4:{
        flexDirection: 'row', 
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal: 10
    },
    view5:{
        flexDirection:'row',
        position:'absolute',
        bottom:25,
        alignSelf:'center'
    },
    touchable1:{
        width: width / 3 +20 ,
        height: (width * 0.12),
        backgroundColor: '#c42d3e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    touchable2:{
        width: width / 3  ,
        height: (width * 0.12),
        backgroundColor: '#c42d3e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },




});   