import { StyleSheet,Dimensions} from 'react-native';Dimensions
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export const COLOR = {
    BLACK: "#000",
    GRAY: "#9A9A9A",
    WHITE:"#FFF",
    Topbackcolor:'#a13745',
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',

    },
    view1:{
        alignItems:'center',
        marginTop:20,
    },
    view2:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'25%'
    },
    view3:{
        height:1,
        width:'60%',
        backgroundColor:'#a13745'
    },
    view4:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:'20%'
    },
    text1:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        fontWeight:'bold'
    },
    image1:{
        height: (width * 0.45),
        width: width / 2 -20,
    },
    image2: {
        height: (width * 0.50),
        width: width / 2 + 50, 
        marginTop: 10
    },

 


});   