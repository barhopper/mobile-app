import React from "react";
import {
    View, Text, StatusBar, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput,
     ScrollView, CheckBox
} from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import AppHeader from '../../components/AppHeader';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class Mappage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: '',
            email: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                  <AppHeader
                    headerTitle={"Barhopper"}
                    icon={'arrow-back'}
                    backgo={require("../../components/Images/left.png")}
                    onPress={() => this.props.navigation.goBack()}
                />
                <View style={{ flex: 1, }}>
                    <ImageBackground source={require('./../../components/Images/map-mob.png')}
                        style={{ height: "100%", width: "100%",}}>
                     <View style={styles.view5}>
                     <View style={styles.view4}>
                            <TouchableOpacity
                                style={styles.touchable2}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>Scale</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view4}>
                            <TouchableOpacity
                             onPress={() => Actions.Homepage()}
                                style={styles.touchable1}>
                                <Text style={{ color: '#fff', fontSize: 12 }}>View List</Text>
                            </TouchableOpacity>
                        </View>
                     </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}


export default Mappage;
