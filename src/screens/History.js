import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    ImageBackground,
    SafeAreaView,
    TouchableOpacity, Text, Dimensions, ScrollView,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import images from '../../assets/images';
import colors from '../../assets/Colors';
import config from '../../assets/Config';

const {width, height} = Dimensions.get('window');

export default class History extends Component {
    static navigationOptions = {
        drawerLabel: 'Driver History',
        drawerIcon: ({tintColor}) => (
            <Image
                source={images.car}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "Daily"
        }
    }


    render() {
        const nav = this.props.navigation;
        return (
            <View>
                {/*HEADER*/}
                <View source={images.bg_image} style={{
                    height: height / 9,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.blue
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{flex: 1, marginLeft: wp('2%')}}>
                            <TouchableOpacity onPress={() => nav.openDrawer()}>
                                <Image
                                    style={{width: wp(config.h_b_b_w), height: hp(config.h_b_b_h)}}
                                    source={images.menu}
                                    resizeMode='contain'
                                /></TouchableOpacity>
                        </View>
                        <View style={{flex: 4, alignItems: 'center'}}><Text
                            style={{color: colors.white, fontSize: wp(config.h_t_f_s)}}>Driver History</Text></View>
                        <View style={{flex: 1, backgroundColor: 'orange'}}></View>

                    </View>
                </View>

                <View style={{height: hp('8.5%'), backgroundColor: colors.light_gray, flexDirection: 'row'}}>

                    <TouchableOpacity style={{
                        width: wp('25%'), height: hp('8%'), backgroundColor: colors.white,
                        alignItems: 'center'
                    }} onPress={() => this.selectTab(0)}>
                        <Text style={{
                            color: this.state.selectedTab === "Daily" ? colors.blue : colors.light_gray,
                            fontSize: wp('4.5%'),
                            fontWeight: 'bold',
                            marginTop: hp('2%')
                        }}>Daily</Text>
                        <View style={{
                            width: '100%',
                            backgroundColor: this.state.selectedTab === "Daily" ? colors.blue : colors.light_gray,
                            height: hp('0.5'),
                            marginTop: hp('2.6%')
                        }}></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: wp('25%'), height: hp('8%'), backgroundColor: colors.white,
                        alignItems: 'center'
                    }} onPress={() => this.selectTab(1)}>
                        <Text style={{
                            color: this.state.selectedTab === "Weekly" ? colors.blue : colors.light_gray,
                            fontSize: wp('4.5%'),
                            fontWeight: 'bold',
                            marginTop: hp('2%')
                        }}>Weekly</Text>
                        <View style={{
                            width: '100%',
                            backgroundColor: this.state.selectedTab === "Weekly" ? colors.blue : colors.light_gray,
                            height: hp('0.5'),
                            marginTop: hp('2.6%')
                        }}></View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: wp('25%'), height: hp('8%'), backgroundColor: colors.white,
                        alignItems: 'center'
                    }} onPress={() => this.selectTab(2)}>
                        <Text style={{
                            color: this.state.selectedTab === "Monthly" ? colors.blue : colors.light_gray,
                            fontSize: wp('4.5%'),
                            fontWeight: 'bold',
                            marginTop: hp('2%')
                        }}>Monthly</Text>
                        <View style={{
                            width: '100%',
                            backgroundColor: this.state.selectedTab === "Monthly" ? colors.blue : colors.light_gray,
                            height: hp('0.5'),
                            marginTop: hp('2.6%')
                        }}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: wp('25%'), height: hp('8%'), backgroundColor: colors.white,
                        alignItems: 'center'
                    }} onPress={() => this.selectTab(3)}>
                        <Text style={{
                            color: this.state.selectedTab === "Yearly" ? colors.blue : colors.light_gray,
                            fontSize: wp('4.5%'),
                            fontWeight: 'bold',
                            marginTop: hp('2%')
                        }}>Yearly</Text>
                        <View style={{
                            width: '100%',
                            backgroundColor: this.state.selectedTab === "Yearly" ? colors.blue : colors.light_gray,
                            height: hp('0.5'),
                            marginTop: hp('2.6%')
                        }}/>
                    </TouchableOpacity>
                </View>


                <View style={styles.mainContainer}>
                    <View
                        style={{
                            marginTop: hp('2%'),
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            alignSelf: 'center',
                            backgroundColor: colors.blue,
                            width: wp('90%'),
                            height: hp('7%'),
                            borderRadius: 5,
                            flexDirection: 'row',
                        }}>
                        <Text style={{fontSize: wp('5%'), color: 'white', marginLeft: wp('3%')}}>
                            Total Earned Today
                        </Text>
                        <Text style={{
                            fontSize: wp('5%'),
                            fontWeight: 'bold',
                            color: 'white',
                            marginRight: wp('3%')
                        }}>$95</Text>
                    </View>

                    <ScrollView style={{height: hp('67.5%')}}>
                        <Collapse>
                            <CollapseHeader>
                                {this._renderIconView()}
                            </CollapseHeader>

                            <CollapseBody>
                                {this._renderCollapseView()}
                            </CollapseBody>

                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                {this._renderIconView()}
                            </CollapseHeader>
                            <CollapseBody>
                                {this._renderCollapseView()}
                            </CollapseBody>
                        </Collapse>

                        <Collapse>
                            <CollapseHeader>
                                {this._renderIconView()}
                            </CollapseHeader>
                            <CollapseBody>
                                {this._renderCollapseView()}
                            </CollapseBody>
                        </Collapse>

                    </ScrollView>

                </View>


            </View>
        );
    }


    _renderIconView = collapse => {
        return (
            <View style={{padding: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 2}}>
                        <Image
                            source={images.avatar2}
                            style={{width: width / 5, height: width / 5}}
                            resizeMode={'contain'}
                        />
                    </View>

                    <View style={{flexDirection: 'column', flex: 6, marginLeft: hp('1%')}}>
                        <Text style={{fontSize: wp('4%'), fontWeight: 'bold', color: colors.gray}}>John Doe
                            Murphy</Text>
                        <Text style={{fontSize: wp('3%'), fontWeight: 'bold', color: colors.gray}}>11/12/18</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Image
                            source={images.b_arrow}
                            style={{width: wp('5%'), height: hp('5%')}}
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
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: hp('2%'),}}>
                    <View style={{flex: 2}}>
                        <Image source={images.heart} resizeMode='contain'
                               style={{borderRadius: 10, width: 25, height: 25, marginLeft: wp('5%')}}
                        />
                    </View>

                    <View style={{flexDirection: 'column', flex: 8}}>
                        <Text style={{fontSize: wp('4%'), color: colors.gray, fontWeight: 'bold'}}>Item</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 2}}>
                        <Text style={{fontSize: wp('5%'), color: colors.blue, fontWeight: 'bold'}}>$12</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: hp('2%'),}}>
                    <View style={{flex: 2}}>
                        <Image source={images.heart} resizeMode='contain'
                               style={{borderRadius: 10, width: 25, height: 25, marginLeft: wp('5%')}}
                        />
                    </View>

                    <View style={{flexDirection: 'column', flex: 8}}>
                        <Text style={{fontSize: wp('4%'), color: colors.gray, fontWeight: 'bold'}}>Item</Text>
                    </View>
                    <View style={{flexDirection: 'column', flex: 2}}>
                        <Text style={{fontSize: wp('5%'), color: colors.blue, fontWeight: 'bold'}}>$12</Text>
                    </View>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <View style={{flex: 6}}>
                        <Text style={{
                            fontSize: wp('4'),
                            fontWeight: 'bold',
                            color: colors.light_gray,
                            marginLeft: wp('5%')
                        }}>Delivery Charge</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: wp('4'), fontWeight: 'bold', color: colors.light_gray,}}>$5.5</Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: colors.light_gray,
                        marginTop: hp('3%')
                    }}
                />
                <View
                    style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                        verticalAlign: 'center',
                        justifyContent: 'space-between',
                        marginTop: hp('1%'),
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: wp('5%'), color: colors.gray, marginLeft: wp('2%')}}>
                        Total
                    </Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: wp('6%'),
                        color: colors.blue,
                        marginRight: wp('2%')
                    }}>
                        $5.50
                    </Text>
                </View>
                <View
                    style={{
                        width: '100%',
                        height: 1,
                        backgroundColor: colors.light_gray,
                        marginTop: hp('3%')
                    }}
                />
            </View>
        );
    };


    selectTab(index) {

        switch (index) {
            case 0:
                this.setState({selectedTab: 'Daily'});
                break;
            case 1:
                this.setState({selectedTab: 'Weekly'});
                break;
            case 2:
                this.setState({selectedTab: 'Monthly'});
                break;
            case 3:
                this.setState({selectedTab: 'Yearly'});
                break;


        }
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20
    }
});

