import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions, ScrollView, SafeAreaView, Platform} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LoadingHUD} from "react-native-hud-hybrid";
import apiService from '../firebase/FirebaseHelper';
import images from '../../assets/images';
import colors from '../../assets/Colors';
import config from '../../assets/Config';

const {width, height} = Dimensions.get('window');
export default class Assignments extends Component {


    static navigationOptions = ({navigation}) => ({
        headerTitle: 'Assignments',
        drawerIcon: ({tintColor}) => (
            <Image
                source={images.account}
                style={[{width: 20, height: 20}, {tintColor: tintColor}]}
                resizeMode={'contain'}
            />
        ),
        headerTitleStyle: {
            color: 'white'
        },

        headerBackground: (
            <Image
                style={{width: '100%', flex: 1}}
                source={images.bg_image}
            />
        ),
    });

    constructor(props) {
        super(props);
        this.loadingHUD = new LoadingHUD();
        this.state = {
            ordersId: [],
            historyIds: []
        };
    }

    componentWillMount() {
        this.focusListner = this.props.navigation.addListener("didFocus", async (res) => {
            this.setState({ordersId: [], historyIds:[]});
            await this.loadData()
        });
    }

    componentWillUnmount = async () => {
        this.focusListner.remove();
    };

    loadData = async () => {
        this.loadingHUD.show();
        let resp = await apiservice.fetchOrders();
        let ordersId = []
        let arrayHistoryOrders = []
        resp.forEach(doc => {
            if (doc._data.status === "Requested" ||
                doc._data.status === "Accepted" ||
                doc._data.status === "OnRoute" ||
                doc._data.status === "Received") {
                ordersId.push({
                    order_id: doc.id,
                    order_detail: doc.data(),

                });
            }else {
                arrayHistoryOrders.push({order_id: doc.id, order_detail: doc.data()});
            }

        });

        this.setState({ordersId: ordersId, historyIds: arrayHistoryOrders});
        setTimeout(() => {
            this.loadingHUD.hideAll();
        }, 1000);
    };

    gotoJobOrderScreen = (order) => {
        this.props.navigation.navigate("JobOrder", {order: order})
    }

    acceptOrder = async (order) => {
        this.loadingHUD.show();
        await apiservice.changeOrderStatus1(order.order_id);
        await this.sendNotificationToCustomer(order.order_detail.userID, 'your order has been accepted');
        this.setState({ordersId: [], historyIds:[]});
        await this.loadData();

    };

    sendNotificationToCustomer = async (uid, text) => {
        let customer = await apiservice.getCustomerProfile(uid);
        await apiservice.sendNotification(customer.fcmToken, text);
    };

    deliverOrder = async (order) => {
        this.loadingHUD.show();
        await apiservice.changeOrderStatus(order.order_id);
        await this.sendNotificationToCustomer(order.order_detail.userID, 'your order has been delivered');
        this.setState({ordersId: [], historyIds:[]});
        await this.loadData();
    };

    _renderItem = (item) => {
        console.log("Order ===>>> ", item);
        return (
            <TouchableOpacity style={{flex: 1, padding: 5}} index={item.index}
                              onPress={this.gotoJobOrderScreen.bind(this, item.item)}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                }}>
                    <View style={{flex: 1, flexDirection: 'column', width: wp("46%")}}>

                        <View style={{flexDirection: "row"}}>
                            <Text style={{color: colors.black, fontWeight: 'bold', fontSize: wp('3.0%')}}>Order # </Text>
                            <Text style={{color: colors.black, fontSize: wp('3.0%')}}>{item.item.order_id}</Text>
                        </View>

                        <Text style={{
                            color: colors.gray,
                            fontWeight: 'bold',
                            fontSize: wp('3.0%')
                        }}>{item.item.order_detail.status}</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: wp('2.5%'),
                        width: wp("45%")
                    }}>
                        {item.item.order_detail.status === 'Requested' ? (
                            <TouchableOpacity style={[styles.addButton]}
                                              onPress={this.acceptOrder.bind(this, item.item)}>
                                <Text style={{color: 'white', fontSize: wp('3.5%')}}>Accept</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity style={{
                                width: wp("20%"),
                                height: width * 0.07,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 5,
                            }}>
                            </TouchableOpacity>
                        )
                        }

                        <TouchableOpacity style={styles.addButton1}
                                          onPress={this.deliverOrder.bind(this, item.item)}>
                            <Text style={{color: 'white', fontSize: wp('3.5%')}}>Delivered</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width: '100%', backgroundColor: colors.gray, height: hp('0.1%'), marginTop: 10}}/>
            </TouchableOpacity>
        );
    };

    _renderHistoryItem = (item) => {
        console.log("History Order ===>>> ", item);
        return (
            <TouchableOpacity style={{flex: 1}} index={item.index} onPress={this.gotoJobOrderScreen.bind(this, item.item)}>
                <View style={{
                    flex: 1,
                    width: wp("100"),
                    marginTop: 20
                }}>
                    <View style={{flex: 1, flexDirection: 'column', width: wp("46%")}}>

                        <View style={{flexDirection: "row"}}>
                            <Text style={{color: colors.black, fontWeight: 'bold', fontSize: wp('3.0%')}}>Order
                                # </Text>
                            <Text style={{color: colors.black, fontSize: wp('3.0%')}}>{item.item.order_id}</Text>
                        </View>

                        <Text style={{
                            color: colors.gray,
                            fontWeight: 'bold',
                            fontSize: wp('3.0')
                        }}>{item.item.order_detail.status}</Text>
                    </View>
                </View>
                <View style={{width: '100%', backgroundColor: colors.gray, height: hp('0.1%'), marginTop: 10}}/>
            </TouchableOpacity>
        )
    }

    render() {
        const nav = this.props.navigation;
        if (this.state.ordersId.length <= 0 && this.state.historyIds.length <= 0) {
            return (
                <View style={{flex: 1}}>
                    <View source={images.bg_image} style={{
                        height: height / 9,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.blue
                    }}>
                        <SafeAreaView style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: Platform.OS === 'ios' ? 20 : 0
                        }}>
                            <View style={{flex: 1, marginLeft: wp('2%')}}>
                                <TouchableOpacity onPress={() => nav.openDrawer()}>
                                    <Image
                                        style={{width: wp(config.h_m_b_w), height: hp(config.h_m_b_h)}}
                                        source={images.menu}
                                        resizeMode='contain'
                                    /></TouchableOpacity>
                            </View>
                            <View style={{flex: 4, alignItems: 'center'}}><Text
                                style={{color: colors.white, fontSize: wp(config.h_t_f_s)}}>Assignments</Text></View>
                            <View style={{flex: 1, backgroundColor: 'orange'}}/>
                        </SafeAreaView>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={{flex: 1}}>
                    {/*HEADER*/}
                    <View source={images.bg_image} style={{
                        height: height / 9,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors.blue
                    }}>
                        <SafeAreaView style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: Platform.OS === 'ios' ? 20 : 0
                        }}>
                            <View style={{flex: 1, marginLeft: wp('2%')}}>
                                <TouchableOpacity onPress={() => nav.openDrawer()}>
                                    <Image
                                        style={{width: wp(config.h_m_b_w), height: hp(config.h_m_b_h)}}
                                        source={images.menu}
                                        resizeMode='contain'
                                    /></TouchableOpacity>
                            </View>
                            <View style={{flex: 4, alignItems: 'center'}}><Text
                                style={{color: colors.white, fontSize: wp(config.h_t_f_s)}}>Assignments</Text></View>
                            <View style={{flex: 1, backgroundColor: 'orange'}}/>

                        </SafeAreaView>
                    </View>

                    <ScrollView style={styles.mainContainer}>
                        <View style={{}}>
                            <Text style={{color: colors.black, fontWeight: 'bold', fontSize: wp('5%')}}>Today's Orders 11/12/18</Text>
                        </View>

                        <FlatList
                            style={{flexDirection: "row", flexWrap: "wrap"}}
                            data={this.state.ordersId}
                            renderItem={this._renderItem}
                            contentContainerStyle={{
                                paddingBottom: 10
                            }}
                        />

                        <View style={{marginTop: 20, marginBottom: 20}}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                                <Text
                                    style={{color: colors.black, fontSize: wp('6%'), fontWeight: 'bold'}}>History</Text>
                            </View>
                        </View>
                        <FlatList
                            style={{flexDirection: "row", flexWrap: "wrap"}}
                            data={this.state.historyIds}
                            renderItem={this._renderHistoryItem}
                            contentContainerStyle={{
                                paddingBottom: 10
                            }}
                        />

                    </ScrollView>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        height: height
    },
    addButton: {
        width: wp("20%"),
        height: width * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: colors.blue,
    },
    addButton1: {
        width: wp("20%"),
        height: width * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: colors.sky_blue,
    }
    , addButton2: {
        borderColor: 'orange',
        width: width * 0.3,
        height: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: colors.assignment_getRoute,
    }
});
