import React from 'react';
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image,Slider} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import SimpleButton from "../common/SimpleButton";
import Header from "../common/Header";

export default class Search2 extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              value:0
          }
      }

    render() {
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
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'space-between',}}>
                    <Text style={styles.text}>Search Distance</Text>
                    <Text style={{fontSize: wp(3)}}>{this.state.value} miles</Text>
                    </View>
                    <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor={'#C02F3D'}
                    thumbTintColor={'#C02F3D'}
                    step={1}
                    onValueChange={(value) => this.setState({value:value})}
                    />
                </View>
                <View>
                    <Text style={{fontSize: wp(3),fontWeight: 'bold',color:'#000000',marginStart:wp(4),marginBottom:hp(3)}}>Categories</Text>
                <View style={styles.viewMiddle}>

                     <View style={{flexDirection: 'row'}}>
                    <SimpleButton bgColor={'#fff'}
                                  btnWidth={wp(16)}
                                  btnHeight={hp(5)}
                                  btnRadius={wp(0.5)}
                                  textColor={'#000000'}
                                  fontSize={wp(2.8)}
                                  title={'Pool'}
                    />
                    <SimpleButton bgColor={'#fff'}
                                  btnWidth={wp(25)}
                                  btnHeight={hp(5)}
                                  btnRadius={wp(0.5)}
                                  fontSize={wp(2.8)}
                                  textColor={'#000000'}
                                  btnMarginStart={wp(4)}
                                  title={'Video Games'}
                    />
                    <SimpleButton bgColor={'#C02F3D'}
                                  btnWidth={wp(14)}
                                  btnHeight={hp(5)}
                                  btnMarginStart={wp(4)}
                                  fontSize={wp(2.8)}
                                  btnRadius={wp(0.5)}
                                  textColor={'#fff'}
                                  title={'Dart'}
                    />
                    <SimpleButton bgColor={'#fff'}
                                  btnWidth={wp(25)}
                                  btnHeight={hp(5)}
                                  fontSize={wp(2.8)}
                                  btnMarginStart={wp(4)}
                                  btnRadius={wp(0.5)}
                                  textColor={'#000000'}
                                  title={'Shuffle Boards'}
                    />
                     </View>
                    <SimpleButton bgColor={'#fff'}
                                  btnWidth={wp(16)}
                                  btnHeight={hp(5)}
                                  btnRadius={wp(0.5)}
                                  fontSize={wp(2.8)}
                                  textColor={'#000000'}
                                  title={'Billiards'}
                    />

                </View>
                </View>
                <View style={styles.viewBtn}>
                    <SimpleButton onPress={() =>this.props.navigation.navigate('Search')} btnHeight={hp(5.5)} btnWidth={wp(45)} btnRadius={wp(0.5)} bgColor={'#C02F3D'} textColor={'#fff'} title={'Next'}/>

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
        height:hp(13),
        // backgroundColor: 'green',
        marginHorizontal:wp(4),
        paddingTop:hp(2.5),
    },
    viewMiddle:{
        // flexDirection:'row',
        height:hp(12),
        width:wp(92),
        // backgroundColor: 'pink',
        marginHorizontal:wp(4),
        // flexWrap:'wrap'
    },
    viewBtn: {
        height:hp(43),
        justifyContent:'flex-end',
        alignItems: 'center',
        marginTop:hp(8),
    },
    text:{
        fontSize:wp(3),
        fontWeight:'bold',
        color:'#000000',
        fontFamily:'System',
    },
    slider:{
        width:wp(96),
        marginTop:hp(2),
    },

});


