import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions, SafeAreaView, Platform, FlatList
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import images from '../../assets/images';
import colors from '../../assets/Colors';
import config from '../../assets/Config';
import {LoadingHUD} from "react-native-hud-hybrid";
import apiService from "../firebase/FirebaseHelper";


const {width, height} = Dimensions.get('window');

export default class JobOrder extends Component {

    static navigationOptions = ({navigation}) => ({

        drawerLabel: 'Job Order',
        drawerIcon: ({tintColor}) => (
            <Image
                source={images.car}
                style={[{width: 20, height: 20}, {tintColor: tintColor}]}
                resizeMode={'contain'}
            />
        ),
    });

    constructor(props) {
        super(props);

        this.loadingHUD = new LoadingHUD();
        this.state = {
            loading: true,

            isRequested: true,
            isAccepted: false,
            isOnRoute: false,
            isReceived: false,
            isDelivered: false,


            order: this.props.navigation.state.params.order,
            orderProducts: [],
            orderCustomer:'',
            name: '',
            email: '',
            phone: ''
        };

    }

    componentDidMount() {
        this.focusListner = this.props.navigation.addListener("didFocus", () => {
            this.loadData().done();
        })
    }

    componentWillUnmount() {
        this.focusListner.remove();
    }

    loadData = async () => {
        // const response = await apiService.jobOrder(orderId);



        let isRequested  = false;
        let isAccepted   = false;
        let isOnRoute    = false;
        let isReceived   = false;
        let isDelivered  = false;

        if (this.state.order.order_detail.status === "Requested"){
            isRequested  = true;
            isAccepted   = false;
            isOnRoute    = false;
            isReceived   = false;
            isDelivered  = false;
        }else if (this.state.order.order_detail.status === "Accepted"){
            isRequested  = true;
            isAccepted   = true;
            isOnRoute    = false;
            isReceived   = false;
            isDelivered  = false;
        }else if (this.state.order.order_detail.status === "OnRoute"){
            isRequested  = true;
            isAccepted   = true;
            isOnRoute    = true;
            isReceived   = false;
            isDelivered  = false;
        }else if (this.state.order.order_detail.status === "Received"){
            isRequested  = true;
            isAccepted   = true;
            isOnRoute    = true;
            isReceived   = true;
            isDelivered  = false;
        }else if (this.state.order.order_detail.status === "Delivered"){
            isRequested  = true;
            isAccepted   = true;
            isOnRoute    = true;
            isReceived   = true;
            isDelivered  = true;
        }


        this.setState({isRequested:isRequested, isAccepted:isAccepted, isOnRoute:isOnRoute, isReceived:isReceived, isDelivered:isDelivered})
        this.setState({orderProducts: this.state.order.order_detail.products});

        let userData = await apiService.getCustomerProfile(this.state.order.order_detail.userID);
        this.setState({orderCustomer: userData, name: userData.username, phone: userData.phoneNo, email: userData.email});

    };

    onHandleAccepted = async () => {
        const {isAccepted} = this.state;
        if (!isAccepted){
            this.loadingHUD.show();
            this.setState({isAccepted: true});
            await apiService.changeOrderStatus1(this.state.order.order_id);
            // let userOrderDetail = await apiService.getAcceptedOrders(orderId);
            // await this.sendNotificationToCustomer(userOrderDetail.userUID, 'your order has been on route');
            await apiService.sendNotification(this.state.orderCustomer.fcmToken, 'your order has been accepted');
            this.loadingHUD.hideAll();
        }
    };

    onHandleRout = async () => {
        const {isOnRoute} = this.state;
        if (!isOnRoute){
            this.loadingHUD.show();
            this.setState({isOnRoute: true});
            await apiService.changeOrderStatus2(this.state.order.order_id);
            // let userOrderDetail = await apiService.getAcceptedOrders(orderId);
            // await this.sendNotificationToCustomer(userOrderDetail.userUID, 'your order has been on route');
            await apiService.sendNotification(this.state.orderCustomer.fcmToken, 'your order is on route');
            this.loadingHUD.hideAll();
        }
    };

    onReceived = async () => {
        const {isReceived} = this.state;
        if (!isReceived){
            this.loadingHUD.show();
            this.setState({isReceived: true});
            await apiService.changeOrderStatus3(this.state.order.order_id);
            // let userOrderDetail = await apiService.getAcceptedOrders(orderId);
            // await this.sendNotificationToCustomer(userOrderDetail.userUID, 'Your Order has been received');
            await apiService.sendNotification(this.state.orderCustomer.fcmToken, 'Order has been received');
            this.loadingHUD.hideAll();
        }
    };

    onDelivered = async () => {
        const {isDelivered} = this.state;
        if (!isDelivered){
            this.loadingHUD.show();
            this.setState({Delivered: true});
            await apiService.changeOrderStatus4(this.state.order.order_id);
            // await apiservice.orderHistory(orderId, orderProducts);
            // alert("Successfully Delivered ");
            // await apiService.deleteItem(orderId);
            // await apiService.deleteOrderDelvery(orderId);
            // let userOrderDetail = await apiService.getAcceptedOrders(orderId);
            // await this.sendNotificationToCustomer(userOrderDetail.userUID, 'Order has been Successfully Delivered');
            await apiService.sendNotification(this.state.orderCustomer.fcmToken, 'Order has been delivered successfully');
            this.loadingHUD.hideAll();
            this.props.navigation.navigate("Assignments")
        }
    };

    sendNotificationToCustomer = async (uid, text) => {
        let customer = await apiService.getCustomerProfile(uid);
        await apiService.sendNotification(customer.fcmToken, text);
    };

    _renderItem = (card) => {
        let source = {uri: card.item.image};
        return (
            <View>
                <View style={styles.orderCenter}>
                    <Image source={source}
                           style={{width: wp('20%'), marginLeft: wp('3%'), alignItems: 'center', height: hp("7")}}
                           resizeMode={'contain'}/>
                    <View style={styles.orderCenterTwo}>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <Text style={{fontSize: wp('5%'), fontWeight: 'bold'}}>{card.item.title}</Text>
                            <Text style={{
                                fontSize: wp('6%'),
                                color: colors.blue,
                                fontWeight: 'bold'
                            }}>{"$"}{card.item.price}</Text>
                        </View>
                        <Text style={{
                            fontSize: wp('4%'),
                            fontWeight: 'bold',
                            marginTop: hp('1.5%'),
                            color: colors.gray
                        }}>{"Quantity "}{card.item.quantity}</Text>
                        <View style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: wp('4%'),
                                color: colors.light_gray,
                                marginTop: hp('1%')
                            }}>Comment</Text>
                        </View>
                        <View style={{
                            width: '80%',
                            borderWidth: 0.5,
                            borderColor: colors.light_gray,
                        }}/>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    borderWidth: 0.5,
                    borderColor: 'gray',
                    marginTop: 10
                }}/>
            </View>
        )
    };

    render() {
        const nav = this.props.navigation;
        const {isRequested, isAccepted, isOnRoute, isReceived, isDelivered} = this.state;

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
                    <SafeAreaView
                        style={{flexDirection: 'row', alignItems: 'center', marginTop: Platform.OS === 'ios' ? 20 : 0}}>
                        <View style={{flex: 1, marginLeft: wp('2%')}}>
                            <TouchableOpacity onPress={() => nav.goBack()}>
                                <Image
                                    style={{width: wp(config.h_m_b_w), height: hp(config.h_m_b_h)}}
                                    source={images.backButton}
                                    resizeMode='contain'
                                /></TouchableOpacity>
                        </View>
                        <View style={{flex: 4, alignItems: 'center'}}><Text
                            style={{color: colors.white, fontSize: wp(config.h_t_f_s)}}>Job Order</Text></View>
                        <View style={{flex: 1, backgroundColor: 'orange'}} />

                    </SafeAreaView>
                </View>


                <View style={styles.mainContainer}>

                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        height: height / 9,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{backgroundColor: 'white', flex: 2, flexDirection: 'column', width: '100%'}}>
                            <Image source={images.avatar2} style={{width: 80, height: 80, borderRadius: 40}}
                                   resizeMode={'contain'}/>
                        </View>

                        <View style={{backgroundColor: 'white', flex: 5, justifyContent: 'center'}}>
                            <Text style={{fontSize: wp('6%'), fontWeight: 'bold' , color: colors.black, marginBottom: 5}}> {this.state.name}</Text>
                            {/*<Text style={{color: colors.gray, fontSize: wp('4%'), borderWidth:1}}>{this.state.phone}</Text>*/}
                            <Text style={{fontSize: wp('4%'), color: colors.gray, marginLeft:"2%"}}>{this.state.email}</Text>
                        </View>

                    </View>
                    <View style={{width: '100%', borderWidth: 0.5, borderColor: 'gray',marginTop: hp("2%")}} />
                    <View>

                        <View style={{flexDirection:"row",marginTop: hp("2%")}}>
                            <Text style={{fontSize: wp('4%'), color: colors.gray, fontWeight: 'bold', textAlign: 'right'}}>Order # </Text>
                            <Text style={{fontSize: wp('4%'), color: colors.black, fontWeight: 'bold', textAlign: 'right'}}>{this.state.order.order_id}</Text>
                        </View>

                        <ScrollView style={{height: hp("40")}}>
                        {/*Items*/}
                        <FlatList
                            style={{marginTop: hp("3%")}}
                            data={this.state.orderProducts}
                            renderItem={this._renderItem}
                            contentContainerStyle={{
                                paddingBottom: 10
                            }}
                        />


                        {/*Deliver Charges & TOTAL*/}
                        <View style={{height: height / 9, marginTop: hp('1%'), flexDirection: 'row'}}>

                            <View style={{flex: 1}}>
                            </View>

                            <View style={[styles.orderCenterTwo, {justifyContent: 'space-between', flex: 1}]}>
                                <View>
                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text style={{fontSize: wp('4%'), fontWeight: 'bold'}}>Delivery Charges</Text>
                                        <Text style={{fontSize: 15, color: colors.blue}}>$ 5.5</Text>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}>
                                        <Text style={{
                                            fontSize: wp('5%'),
                                            fontWeight: 'bold',
                                            color: colors.blue
                                        }}>Total</Text>
                                        <Text style={{
                                            fontSize: wp('4%'),
                                            fontWeight: 'bold',
                                            color: colors.blue
                                        }}>{"$ "}{this.state.order.order_detail.price}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        </ScrollView>


                    </View>




                    {/*STATUS*/}
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: wp('5%'),
                            color: colors.gray,
                            marginBottom: hp('1%')
                        }}>Update Status</Text>

                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress={this.onHandleAccepted} style={{flex: 1.5, flexDirection: 'row', alignItems: 'center', marginTop: hp('1%')}}>
                                <Image source={isAccepted?images.checked:images.un_checked} style={{width: wp('7%'), height: hp('3%')}}
                                       resizeMode={'contain'}/>
                                <Text style={{fontSize: wp('4%')}}> Accepted</Text>
                        </TouchableOpacity>

                            <TouchableOpacity onPress={this.onHandleRout} style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: hp("1")}}>
                                    <Image source={isOnRoute?images.checked:images.un_checked} style={{width: wp('7%'), height: hp('3%')}}
                                           resizeMode={'contain'}/>
                                <Text style={{fontSize: wp('4%')}}> On Route</Text>
                            </TouchableOpacity>


                        </View>

                        <View style={{flex: 1}}>
                            <TouchableOpacity onPress={this.onReceived} style={{flex: 1.5, flexDirection: 'row', alignItems: 'center', marginTop: hp('1%')}}>
                                <Image source={isReceived?images.checked:images.un_checked} style={{width: wp('7%'), height: hp('3%')}}
                                           resizeMode={'contain'}/>
                                <Text style={{fontSize: wp('4%')}}> Received</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.onDelivered} style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: hp("1")}}>
                                <Image source={isDelivered?images.checked:images.un_checked} style={{width: wp('7%'), height: hp('3%')}}
                                           resizeMode={'contain'}/>

                                <Text style={{fontSize: wp('4%')}}> Delivered</Text>
                        </TouchableOpacity>

                        </View>

                    </View>
                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        width: width,
        height: height
    },
    orderCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        height: height / 6
    },
    orderCenterOne: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    orderCenterTwo: {
        flex: 2,
        height: '100%',
        flexDirection: 'column',
        padding: 10
    },
});
