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
        backgroundColor: '#f2f2f2',

    },
    view1:{
        width: '100%',
        height: (width * 0.13),
        backgroundColor: '#fff',
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:15
    },
    view2:{
        width: '100%',
        height: (width * 0.13),
        backgroundColor: '#fff',
        marginTop: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:15
    },
    view3:{
        width: '100%',
        height: (width * 0.13),
        backgroundColor: '#fff',
        marginTop: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:15
    },
    text1:{
        marginLeft: 20, 
        fontWeight: 'bold', 
    },
    text2:{
            marginLeft: 20, 
            fontWeight: 'bold',
            color:'#c42d3e'
    },
    image1:{
        height: 20,
         width: 20,
    },
    arrow:{
        height: 12,
         width: 10, 
    },

  

});   