import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, TextInput} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import images from "../../assets/images";
import Header from "../common/Header";
import PlaceComponent from "../common/PlaceComponent";
import InputComponent from "../common/InputComponent";
import SimpleButton from "../common/SimpleButton";
import colors from "../../assets/Colors";
import {Collapse, CollapseBody, CollapseHeader} from "accordion-collapse-react-native";

export default class RateBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    _renderIconView = collapse => {
        return (
            <View style={{padding: 11,borderWidth:0.2,backgroundColor:'#fff',borderColor:'#fff',marginHorizontal:wp(4),marginBottom:hp(1)}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flexDirection: 'column', flex: 6, marginLeft: hp('1%')}}>
                        <Text style={{fontSize: wp('3.5%'),  color: colors.gray}}>Answer
                            </Text>
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Image
                            source={images.ic_dropdown}
                            style={{width: wp('4%'), height: hp('4%')}}
                            resizeMode={'contain'}
                        />
                    </View>
                </View>
            </View>
        );
    };

    _renderCollapseView = collapse => {
        return (
            <View style={{width: '100%'}}>
                <View style={{alignItems: 'center', marginBottom: hp('2%'),}}>
                    <View style={{flexDirection: 'column', flex: 2}}>
                        <Text style={{fontSize: wp('4%'), color: colors.blue, fontWeight: 'bold'}}>1</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 2}}>
                        <Text style={{fontSize: wp('4%'), color: colors.blue, fontWeight: 'bold'}}>2</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 2}}>
                        <Text style={{fontSize: wp('4%'), color: colors.blue, fontWeight: 'bold'}}>3</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 2}}>
                        <Text style={{fontSize: wp('4%'), color: colors.blue, fontWeight: 'bold'}}>4</Text>
                    </View>
                </View>

            </View>
        );
    };



    render() {

        return (
            <View style={styles.viewStyle}>
                <Header bgColor={'#C02F3D'}
                        imgLeftColor={'#fff'}
                        imgLeft={images.ic_left_arrow}
                        textColor={'#fff'}
                        title={'Rate Bar'}
                        textLink={'Skip'}
                        onPressTextLink={() => this.props.navigation.navigate('Response')}
                        textSize={wp(3)}
                        onPress={() => this.props.navigation.goBack()}
                />
                <ScrollView style={{height: hp('67.5%',)}} showsVerticalScrollIndicator={false}>
                <View style={{justifyContent:'center',alignItems:'center',marginVertical:hp(2)}}>
                <Text style={{fontSize: wp(3.7),color:'#C02F3D',fontWeight:'bold',textAlign:'center',width:wp(60)}}>Its's sad to see you go but before that, let us hear from you!</Text>
                </View>
                <Text style={{color:'#000000',fontWeight:'bold',marginStart:wp(4)}}>Questions:(Scale of 1-10)</Text>
                <View style={styles.lineView}/>

                    <Text style={styles.questionText}>Are the bartenders good-looking?</Text>
                    <Collapse>
                        <CollapseHeader>
                            {this._renderIconView()}
                        </CollapseHeader>

                        <CollapseBody>
                            {this._renderCollapseView()}
                        </CollapseBody>

                    </Collapse>
                    <Text style={styles.questionText}>Are the bartenders friendly?</Text>
                    <Collapse>
                        <CollapseHeader>
                            {this._renderIconView()}
                        </CollapseHeader>
                        <CollapseBody>
                            {this._renderCollapseView()}
                        </CollapseBody>
                    </Collapse>
                    <Text style={styles.questionText}>Is the bar particulary clean, cool or cozy?</Text>
                    <Collapse>
                        <CollapseHeader>
                            {this._renderIconView()}
                        </CollapseHeader>
                        <CollapseBody>
                            {this._renderCollapseView()}
                        </CollapseBody>
                    </Collapse>
                    <Text style={styles.questionText}>Are the products and services affordable?</Text>
                    <Collapse>
                        <CollapseHeader>
                            {this._renderIconView()}
                        </CollapseHeader>
                        <CollapseBody>
                            {this._renderCollapseView()}
                        </CollapseBody>
                    </Collapse>

                    <Text style={styles.text}>{'Comments:'}</Text>
                    <View style={styles.viewInput}>
                        <View style={styles.viewInputLayout}>
                            <TextInput placeholder={'Enter comment'}/>
                        </View>
                    </View>
                    <Text style={{paddingTop: hp(2),marginStart:wp(4),fontSize: wp(3.2),fontWeight: 'bold',color:"#000000"}}>{'Overall Experience'}</Text>
                    <View style={{alignItems: 'center',marginTop:hp(2)}}>
                        <View style={styles.viewStar}>
                            <Image style={styles.img} source={images.ic_star} />
                            <Image style={styles.img} source={images.ic_star} />
                            <Image style={styles.img} source={images.ic_star} />
                            <Image style={styles.img} source={images.ic_star} />
                            <Image style={styles.img} source={images.ic_star} />
                        </View>
                    </View>
                    <View style={styles.viewBtn}>
                        <SimpleButton
                            bgColor={'#C42D3E'}
                            btnWidth={wp(47)}
                            btnHeight={hp(6)}
                            textColor={'#fff'}
                            title={'Submit'}
                            onPress={() =>this.props.navigation.navigate('Response')}

                        />
                    </View>

                </ScrollView>

                </View>



        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        flex:1,
        backgroundColor:'#f0f0f0',
    },
    lineView: {
        height:hp(0.3),
        width:wp(5),
        backgroundColor:'#C42D3E',
        marginTop: hp(1.5),
        marginStart:wp(4),
    },
    img: {
        height:hp(7),
        width:wp(7),
        resizeMode:'contain',
        marginStart:wp(2)
    },
    text: {
        fontSize:wp(3.5),
        fontWeight:'bold',
        color:'#000000',
        // textAlign: 'center',
        marginStart: wp(4),
        marginVertical:hp(1),
        fontFamily:'System',
    },
    viewStar:{
        flexDirection:'row'
    },
    viewInput:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:hp(0.5),
    },
    viewInputLayout:{
        height: hp(20),
        width: wp(92),
        borderWidth:wp(0.3),
        borderRadius: wp(0.3),
        borderColor:'#ddd',
        borderBottomWidth:wp(0),
        shadowColor:'grey',
        shadowOffset:{width:wp(0.4), height:hp(2)},
        shadowOpacity:wp(0.4),
        shadowRadius:wp(2),
        elevation:wp(2),
        marginTop:hp(0),
        backgroundColor:'#fff',
        padding:wp(2),
        paddingTop:hp(1),
    },
    viewBtn: {
        marginTop:hp(3),
        marginBottom:hp(3),
        justifyContent: 'center',
        alignItems: 'center',
    },
    questionText:{
        marginStart:wp(4),
        fontSize:wp(3.2),
        fontWeight:'bold',
        marginVertical:hp(2)
    }


});
