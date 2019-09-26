import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
    ScrollView, FlatList
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/Header';
import { Card } from 'native-base';
import RF from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const items = [
    {
        img1: require("../../components/Images/image8.png"),
        name: "O'KEEFE'S BAR & GRILL",
        distance: "0.3 mi",
        line1: "Lovely sports bar doling out pub grub & plenty of booze in TV-equipped surroundings.",
        // line2: "plenty of booze in TV-equipped",
        // line3: "surroundings."
    },
    {
        img1: require("../../components/Images/image-9.png"),
        name: "200 FIFTH",
        distance: "2.2 mi",
        line1: "Longtime Park Slope sports bar that draws a crowd with beer & televised sports.",
        // line2: "a crowd with beer & televised sports.",
    },
    {
        img1: require("../../components/Images/3.png"),
        name: "TEDDY'S BAR & GRILL",
        distance: "4.3 mi",
        line1: "Old New York lives on at this 18880s-era bar eatery with stained-glass windows..",
        // line2: "bar eatery with stained-glass windows..",
    },
    {
        img1: require("../../components/Images/4.png"),
        name: "MONTERO",
        distance: "6.7 mi",
        line1: "Longyime watering hole with a weatered bar & pool table in a nautical-themed set...",
        // line2: "bar & pool table in a nautical-themed set...",
    },
    {
        img1: require("../../components/Images/4.png"),
        name: "MONTERO",
        distance: "6.7 mi",
        line1: "Longyime watering hole with a weatered bar & pool table in a nautical-themed set...",
        // line2: "bar & pool table in a nautical-themed set...",
    },
    {
        img1: require("../../components/Images/4.png"),
        name: "MONTERO",
        distance: "6.7 mi",
        line1: "Longyime watering hole with a weatered bar & pool table in a nautical-themed set...",
        // line2: "bar & pool table in a nautical-themed set...",
    },
    {
        img1: require("../../components/Images/4.png"),
        name: "MONTERO",
        distance: "6.7 mi",
        line1: "Longyime watering hole with a weatered bar & pool table in a nautical-themed set...",
        // line2: "bar & pool table in a nautical-themed set...",
    },

];

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            date: '',
            search: '',
        };
        this.searchUser = this.searchUser.bind(this);
    }
    searchUser(event) {
        console.log(event)
        this.setState({
            search: event
        })
    }

    render() {
        let filterData = [];
        if (filterData) {
            filterData = this.state.search ? items.filter(row => row.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1) : items;
        }
        return (
            <View style={{ flex: 1 }}>

                <AppHeader
                    headerTitle={'Barhopper'}
                    icon={'arrow-back'}
                    map={require("../../components/Images/mapview.png")}
                    onPress={() => Actions.Mappage()}
                    userprofile={require("../../components/Images/settings2.png")}
                    profile={() => Actions.Settings()}
                    userimg={require("../../components/Images/notification.png")}
                    notification={() => Actions.Notification()}

                />

                <View>
                    <View style={styles.view1}>
                        <View style={styles.view2}>
                            <View >
                                <Image source={require("../../components/Images/search.png")}
                                    style={{ height: 15, width: 15 }}>
                                </Image>
                            </View>
                            <View style={{ marginHorizontal: 15 }}>
                                <TextInput style={styles.textinput1}
                                    underlineColorAndroid="transparent"
                                    placeholder="Search"
                                    placeholderTextColor="#999999"
                                    autoCapitalize="none"
                                    value={this.state.search}
                                    onChangeText={(text) => this.searchUser(text)} />
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <View style={styles.view5} />
                            <TouchableOpacity onPress={() => Actions.Searchandfilter()}>
                                <Image source={require("../../components/Images/filter.png")}
                                    style={{ height: 15, width: 15 }}>
                                </Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.touchable1}>
                            <Text style={{
                                color: '#fff',
                                fontSize: RF(1.8),
                                marginLeft: 10
                            }}>
                                Bars Near Me
                                     </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchable2}>
                            <Text style={{ color: '#fff', fontSize: RF(1.8), }}>Music</Text>
                            <Image source={require("../../components/Images/cross.png")}
                                style={styles.image1}>
                            </Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchable3}>
                            <Text style={{ color: '#fff', fontSize: RF(1.8), }}>Pop</Text>
                            <Image source={require("../../components/Images/cross.png")}
                                style={styles.image1}>
                            </Image>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <FlatList
                            data={items}
                            showsVerticalScrollIndicator={false}
                            // removeClippedSubviews={false}

                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    onPress={() => Actions.Barpage()}
                                >
                                    <View style={{ alignItems: 'center', }}>
                                        <View style={styles.view4}>

                                            <View>
                                                <Image source={item.img1}
                                                    style={styles.image2}>
                                                </Image>
                                            </View>
                                            <View style={{ width: width / 2 + 43 }}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <View style={{ flex: 4 }}>
                                                        <Text style={styles.text2}>
                                                            {item.name}</Text>
                                                    </View>
                                                    <View style={{
                                                        flex: 1,
                                                    }}>
                                                        <Text style={{
                                                            marginTop: 10,
                                                            color: '#c42d3e',
                                                            fontSize: RF(1.8),
                                                        }}>
                                                            {item.distance}
                                                        </Text>
                                                    </View>
                                                </View>
                                                <View style={styles.view6} />
                                                <View style={{ padding: 10, }}>
                                                    <Text style={styles.text1}>{item.line1}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            }
                        />
                    </View>


                </View>
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        bottom: 10, alignSelf: 'center',
                    }}
                >
                    <View style={{
                        padding: 13,
                        width: wp('50%'),
                        backgroundColor: '#c42d3e',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 3
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: RF(2.2)
                        }}>
                            Promotions
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}


export default Homepage;
