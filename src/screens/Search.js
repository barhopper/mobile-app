import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import SimpleButton from "../common/SimpleButton";
import Header from "../common/Header";

export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
           isPool:false,

        }

    }

    onButtonPress() {
        if (this.state.isPool){
            this.setState({isPool:false})

        }else{
            this.setState({isPool:true})

        }

    }



    render() {
        let { isPool }=this.state;
        return(


            <View style={styles.mainContainer}>
                <Header bgColor={'#C02F3D'}
                        imgLeftColor={'#fff'}
                        imgLeft={images.ic_left_arrow}
                        textColor={'#fff'}
                        title={'Search'}
                        onPress={() => this.props.navigation.goBack()}

                />
                <View style={styles.viewUpper}>
                    <Text style={styles.text}>Sub-categories for SPORTS</Text>
                </View>
                <View style={styles.viewMiddle}>

                        <View style={{ flexDirection:'row',}}>
                        <SimpleButton
                                      onPress={()=>this.onButtonPress()}
                                      bgColor={isPool ?"#C02F3D":"#fff" }
                                      btnWidth={wp(16)}
                                      btnHeight={hp(5)}
                                      btnRadius={wp(0.5)}
                                      textColor={isPool ? "#fff" : "#000000"}
                                      fontSize={wp(2.8)}
                                      title={'Pool'}
                        />
                    <SimpleButton

                                  bgColor={'#fff'}
                                  btnWidth={wp(25)}
                                  btnHeight={hp(5)}
                                  btnRadius={wp(0.5)}
                                  fontSize={wp(2.8)}
                                  textColor={'#000000'}
                                  btnMarginStart={wp(4)}
                                  title={'Video Games'}
                    />
                    <SimpleButton
                                  btnWidth={wp(14)}
                                  bgColor={'#fff'}
                                  btnHeight={hp(5)}
                                  btnMarginStart={wp(4)}
                                  fontSize={wp(2.8)}
                                  btnRadius={wp(0.5)}
                                  textColor={'#000000'}
                                  title={'Dart'}
                    />
                    <SimpleButton
                                  btnWidth={wp(25)}
                                  bgColor={'#fff'}
                                  btnHeight={hp(5)}
                                  fontSize={wp(2.8)}
                                  btnMarginStart={wp(4)}
                                  btnRadius={wp(0.5)}
                                  textColor={'#000000'}
                                  title={'Shuffle Boards'}
                    />
                        </View>
                    <SimpleButton
                                  btnWidth={wp(16)}
                                  bgColor={'#fff'}
                                  btnHeight={hp(5)}
                                  btnRadius={wp(0.5)}
                                  fontSize={wp(2.8)}
                                  textColor={'#000000'}
                                  title={'Billiards'}
                    />

                </View>
                <View style={styles.viewBtn}>
                    <SimpleButton onPress={() =>this.props.navigation.navigate('HomeScreen')} btnHeight={hp(5.5)} btnWidth={wp(45)} btnRadius={wp(0.5)} bgColor={'#C02F3D'} textColor={'#fff'} title={'Search'}/>

                </View>
                </View>
        );
    }
}

const styles= StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#f0f0f0',

    },
    viewUpper:{
        height:hp(7.5),
        // backgroundColor: 'green',
        marginHorizontal:wp(4),
        paddingTop:hp(2),
    },
    viewMiddle:{
        height:hp(12),
        width:wp(92),
        // backgroundColor: 'pink',
        marginHorizontal:wp(4),
        // flexWrap:'wrap'
    },
    viewBtn: {
        height:hp(62),
        // backgroundColor:'green',
        justifyContent:'flex-end',
        alignItems: 'center',
        // marginTop:'20%'
    },
    text:{
        fontSize:wp(3),
        fontWeight:'bold',
        color:'#000000',
        fontFamily:'System',
    }

});


