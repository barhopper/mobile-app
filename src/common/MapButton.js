import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";

export default class MapButton extends React.Component {


    render() {

        return(
            <View style={styles.container} >
                <View style={styles.viewUpper}>
                    <View style={styles.viewText}>
                        <Text style={{fontSize:10,color:'#fff'}}>SCALE</Text>
                    </View>
                    <View style={styles.viewBottom}>
                        <Collapse>
                            <CollapseHeader>
                                <View style={styles.viewBottomInner}>
                                    <View style={styles.viewBottomInnerText}>
                                        <Text style={styles.text}>20 ml</Text>
                                    </View>
                                    <View style={styles.viewBottomInnerImg}>
                                        <Image style={styles.img} source={images.ic_dropdown_2} />
                                    </View>
                                </View>
                            </CollapseHeader>
                            <CollapseBody>
                                <Text style={styles.text}>40 ml</Text>
                            </CollapseBody>
                        </Collapse>
                    </View>
                </View>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
         flex:1,
         justifyContent:'flex-end',
        // alignItems:'center',
    },
    img:{
        height:10,
        width:10,
        resizeMode:'contain'
    },
    text:{
        textAlign:'center',
        fontSize:12,
    },
    viewUpper:{
        height:'6.5%',
        width:'30%',
        backgroundColor: '#fff'
    },
    viewText:{
        height:'40%',
        width:'100%',
        backgroundColor: '#C02F3D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBottom:{
        height: '50%',
        backgroundColor: '#fff'
    },
    viewBottomInner:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewBottomInnerText:{
        height: '100%',
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'1%',
        marginLeft:'2%'
    },
    viewBottomInnerImg: {
        height: '100%',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    }



});


